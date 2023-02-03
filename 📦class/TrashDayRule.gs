class TrashDayRule {

  /** 
   * @param{object}収集日オブジェクト
   */
  constructor(trashDate) {
    this.trashDate = trashDate;

    this.rules = [];

    //ゴミの日ルールが増えたり、変更したりしたら、クラスを入れ替えるだけ
    this.rules.push(new MoyaserugomiRule());
    // this.rules.push(new ShigenGomiCan());

  }

  /** 各ゴミの日ルールのOKメソッドのbooleanを判定する */
  isTrashDay() {

    const rules = this.rules;

    for (const rule of rules) {
      if (!rule.ok(this.trashDate)) return
      return true
    }

  }





  // isTrashDay(){

  // const area = this.getArea_();
  // const week = this.getWeek_();
  // const day = this.getDay_();

  // const n = new JudgeTrashDate(area,week,day);
  // return n.getMessage();

  // }




  //   getArea_() {
  //     const area = this.trashDate.area;
  //     return area
  //   }

  //   getWeek_() {
  //     const area = this.trashDate.week;
  //     return area
  //   }

  //   getDay_() {
  //     const area = this.trashDate.day;
  //     return area
  //   }


}

