class Week246Rule {

  /** 
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    return trashDate.week === 2 || trashDate.week === 4 || trashDate.day === 6;
  }

}