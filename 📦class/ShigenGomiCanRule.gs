class ShigenGomiCanRule {

  /**
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    const areaARule = (trashDate.area === "A") && (trashDate.day === "火") && (trashDate.week === 1 || trashDate.week === 3 || trashDate.week === 5);
    const areaBRule = (trashDate.area === "B") && (trashDate.day === "月") && (trashDate.week === 1 || trashDate.week === 3 || trashDate.week === 5);
    return areaARule || areaBRule;
  }

  
  getMessage(){
    return "今日は資源ゴミの日です";
  }


}



