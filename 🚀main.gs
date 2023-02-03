//エントリポイント
function main() {

  // const trashDate = {
  //   area: "A",
  //   week: 1,
  //   day: "月"
  // };　//燃えるゴミの日

  const trashDate = {
    area: "A",
    week: 1,
    day: "火"
  };　//資源ゴミカンの日

const t = new TrashDayRule(trashDate);
console.log(t.isTrashDay());

}


function test_main() {

  const exports = GASUnit.exports
  const assertThat = AssertGAS.assertThat

  exports({
    'main': {
      '#complyWithAll()': {
        'こうなるはず': function () {

          const m = new MoyaserugomiPolicy();

          const trashDate = {
            area: "A",
            areaNumber: "A1",
            week: 1,
            day: "月"
          };

          assertThat(m.complyWithAll(trashDate)).is(true);


        }
      }
    }
  })
}