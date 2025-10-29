// const words = [];

// // Parallel - ES5
// for (var i = 0; i < 9; i++) {
//     $.get('http://localhost:3456/word/' + i,
//         (function (index) {
//             return function (data) {
//                 words[index] = data;
//                 updateUi();
//             }
//         })(i)
//     );
//
// }

// // Parallel - ES2015
// for (let i = 0; i < 9; i++) {
//   $.get("http://localhost:3456/word/" + i, (data) => {
//     words[i] = data;
//     updateUi();
//   });
// }
//
// function updateUi() {
//   if (words.length === 9 && !words.includes(undefined)) {
//     // ES2016! -> find more complicated soltution for older browsers ...
//     document.getElementById("content").textContent = words.join(" ");
//   }
// }

// Sequential
const words = [];

$.get("http://localhost:3456/word/0", (data) => {
  words[0] = data;
  updateUi();
  $.get("http://localhost:3456/word/1", (data) => {
    words[1] = data;
    updateUi();
    $.get("http://localhost:3456/word/2", (data) => {
      words[2] = data;
      updateUi();
      $.get("http://localhost:3456/word/3", (data) => {
        words[3] = data;
        updateUi();
        $.get("http://localhost:3456/word/4", (data) => {
          words[4] = data;
          updateUi();
          $.get("http://localhost:3456/word/5", (data) => {
            words[5] = data;
            updateUi();
            $.get("http://localhost:3456/word/6", (data) => {
              words[6] = data;
              updateUi();
              $.get("http://localhost:3456/word/7", (data) => {
                words[7] = data;
                updateUi();
                $.get("http://localhost:3456/word/8", (data) => {
                  words[8] = data;
                  updateUi();
                  $.get("http://localhost:3456/word/9", (data) => {
                    words[9] = data;
                    updateUi();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

function updateUi() {
  document.getElementById("content").textContent = words.join(" ");
}

// Recursive
// function getNextWord(command) {
//   if (command.word) {
//     document.getElementById("content").textContent += " " + command.word;
//   }
//   $.get("http://localhost:3456/word/" + command.number, (data) => {
//     if (data) {
//       const newCommand = { word: data, number: command.number + 1 };
//       getNextWord(newCommand);
//     }
//   });
// }
// getNextWord({ number: 0 });
