class Week135Rule {

  /** 
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    return trashDate.week === 1 || trashDate.week === 3 || trashDate.day === 5;
  }

}