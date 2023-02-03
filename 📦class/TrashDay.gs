class TrashDay {

  constructor(trashDate) {
    this.area = trashDate.area;
    this.week = trashDate.week;
    this.day = trashDate.day;
  }

  /** メソッド */
  isTrashDay() {

    const areaARule = (trashDate.area === "A") && (trashDate.day === "月" || trashDate.day === "水" || trashDate.day === "金");
    const areaBRule = (trashDate.area === "B") && (trashDate.day === "火" || trashDate.day === "木" || trashDate.day === "土");

    if (areaARule || areaBRule) {
      return new MoyaserugomiRule().getMessage;
    }






  }
}