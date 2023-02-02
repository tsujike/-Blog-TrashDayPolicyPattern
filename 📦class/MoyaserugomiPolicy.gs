class MoyaserugomiPolicy {

  //コンストラクタで、条件となるルールを追加する
  constructor() {
    this.policy = new TrashDayPolicy();
    this.policy.rules.push(new AreaARule());
    this.policy.rules.push(new MondayRule());
  }

  /** ルールを満たすばあいtrueを返すメソッド
   * @param{object}　ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  complyWithAll(trashDate) {
    return this.policy.complyWithAll(trashDate);
  }

  getMessage(){
    return "今日は燃えるゴミの日です";
  }

}