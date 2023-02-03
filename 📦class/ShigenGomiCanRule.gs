class ShigenGomiCanRule {

  /**
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    const areaARule = ("ここを値オブジェクト化") && (trashDate.day === "火") && (trashDate.week === 1 || trashDate.week === 3 || trashDate.week === 5);
    const areaBRule = (trashDate.area === "B") && (trashDate.day === "月") && (trashDate.week === 1 || trashDate.week === 3 || trashDate.week === 5);
    return areaARule || areaBRule;
  }


}



