class MonWedFridayRule {

  /** 
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    return trashDate.day === "月" || trashDate.day === "水" || trashDate.day === "金";
  }

}