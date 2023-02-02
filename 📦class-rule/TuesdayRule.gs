class TuesdayRule {

  /** 
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    return trashDate.day === "火";
  }

}