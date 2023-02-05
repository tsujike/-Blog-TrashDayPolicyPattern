/**
 *  ゴミの日判定アプリ
 */
function junFunction() {


  class TrashDayRule {

    /** 
     * @param{object}収集日オブジェクト
     */
    constructor(trashDate) {
      this.trashDate = trashDate;

      this.rules = [];

      //ゴミの日ルールが増えたり、変更したりしたら、クラスを入れ替えるだけ
      this.rules.push(new MoyaserugomiRule());
      this.rules.push(new ShigenGomiCanRule());

    }

    /** 各ゴミの日ルールのOKメソッドのbooleanを判定するメソッド */
    isTrashDay() {

      const rules = this.rules;

      for (const rule of rules) {
        if (rule.ok(this.trashDate)) return true;
      }

    }

    /** "今日は○○の日です"を返すメソッド */
    getTrashDayMessage() {

      const rules = this.rules;

      for (const rule of rules) {
        if (rule.ok(this.trashDate)) return rule.getMessage();
      }

    }

  }

  class MoyaserugomiRule {

    /**
     * @param{object} ゴミ収集日オブジェクト
     * @return{boolean} true/false 
     */
    ok(trashDate) {
      const areaARule = (trashDate.area === "A") && (trashDate.day === "月" || trashDate.day === "水" || trashDate.day === "金");
      const areaBRule = (trashDate.area === "B") && (trashDate.day === "火" || trashDate.day === "木" || trashDate.day === "土");
      return areaARule || areaBRule;
    }

    getMessage() {
      return "今日は燃えるゴミの日です";
    }


  }


  class ShigenGomiCanRule {

    /**
     * @param{object} ゴミ収集日オブジェクト
     * @return{boolean} true/false 
     */
    ok(trashDate) {
      const areaARule = (trashDate.area === "A") && (trashDate.day === "火") && (trashDate.week === 1 || trashDate.week === 3 || trashDate.week === 5);
      const areaBRule = (trashDate.area === "B") && (trashDate.day === "月") && (trashDate.week === 1 || trashDate.week === 3 || trashDate.week === 5);
      return areaARule || areaBRule;
    }


    getMessage() {
      return "今日は資源ゴミの日です";
    }


  }




  //エントリポイント
  function main() {

    // const trashDate = {
    //   area: "A",
    //   week: 1,
    //   day: "月"
    // };　//燃えるゴミの日

    const trashDate = {
      area: "A",
      week: 1,
      day: "火"
    };　//資源ゴミカンの日

    const t = new TrashDayRule(trashDate);
    console.log(t.isTrashDay()); //true

    console.log(t.getTrashDayMessage()); //true
  }


  //よーいどん
  main();


}
