class TrashDayPolicy {

  constructor() {
    this.rules = [];
  }

  /** ルールを追加するメソッド
    * @param{object} 各ゴミの日判定クラス
    */
  add(rule) {
    this.rules.push(rule);
  }

  /** メソッド
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  complyWithAll(trashDate) {
    for (const rule of this.rules) {

      //メソッド名を固定して共通処理を回すポリモーフィズム
      if (!rule.ok(trashDate)) return false;

    }
    return true;
  }



}

