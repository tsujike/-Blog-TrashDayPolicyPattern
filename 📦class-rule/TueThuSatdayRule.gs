class TueThuSatdayRule {

  /** 
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    return trashDate.day === "火" || trashDate.day === "木" ||trashDate.day === "土";
  }

}