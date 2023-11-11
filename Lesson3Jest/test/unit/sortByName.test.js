const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
     
      const input = [
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ]

      const expected = [
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ]
      
      const result = sorting.sortByName(input);
      
      expect(result).toEqual(expected);
  });

  it("Function when used without parameter", () => {
    expect(()=> sorting.sortByName())
  });

  it("Нет сортировки", () => {
     
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
    ]

    const expected = [
        "Гарри Поттер",
        "Гарри Поттер",
      ]
    
    
    const result = sorting.sortByName(input);
    
    expect(result).toEqual(expected);
});


});
