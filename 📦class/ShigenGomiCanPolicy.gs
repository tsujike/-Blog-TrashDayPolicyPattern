class ShigenGomiCanPolicy {

  //コンストラクタで、条件となるルールを追加する
  constructor() {
    this.policy = new TrashDayPolicy();
    this.policy.rules.push(new AreaARule());
    this.policy.rules.push(new TuesdayRule());
    this.policy.rules.push(new Week135Rule());
  }

  /** ルールを満たすばあいtrueを返すメソッド
   * @param{object}　ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  complyWithAll(trashDate) {
    return this.policy.complyWithAll(trashDate);
  }

  getMessage() {
    return "今日は資源ゴミカンの日です";
  }

}