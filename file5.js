function getStudentsWithNamesAndTopNotes(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].Topnote = arr[i].notes;
      delete arr[i].notes;
      if (arr[i].Topnote.length === 0) {
        arr[i].Topnote = 0;
      } else {
        let max = Math.max(...arr[i].Topnote);
        arr[i].Topnote = max;
      }
    }
    return arr;
  }
  
  console.log(getStudentsWithNamesAndTopNotes([
      { "name": "John", "notes": [3, 5, 4] },
      { "name": "Max", "notes": [1, 4, 6] },
      { "name": "Zygmund", "notes": [1, 2, 3] }
  ]));
  
  //  [
  // 	{ "name": "John", "topNote": 5 },
  // 	{ "name": "Max", "topNote": 6 },
  // 	{ "name": "Zygmund", "topNote": 3 }
  // ];