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





