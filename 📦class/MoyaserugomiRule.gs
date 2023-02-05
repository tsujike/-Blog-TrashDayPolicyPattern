class MoyaserugomiRule {

  /**
   * @param{object} ゴミ収集日オブジェクト
   * @return{boolean} true/false 
   */
  ok(trashDate) {
    const areaARule = (trashDate.area === "A") && (trashDate.day === "月" || trashDate.day === "水" || trashDate.day === "金");
    const areaBRule = (trashDate.area === "B") && (trashDate.day === "火" || trashDate.day === "木" || trashDate.day === "土");
    return areaARule || areaBRule;
  }

  getMessage(){
    return "今日は燃えるゴミの日です";
  }


}


function test_MoyaserugomiRule() {

  const exports = GASUnit.exports
  const assertThat = AssertGAS.assertThat

  exports({
    'ok': {
      '#ok()': {
        'こうなるはず': function () {

          const m = new MoyaserugomiRule();

          const trashDate = {
            area: "A",
            // week: 1,
            day: "月"
          };

          assertThat(m.ok(trashDate)).is(true);


        }
      }
    }
  })
}

