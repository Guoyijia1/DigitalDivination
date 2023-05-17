
    $(document).ready(function() {
      // JSON data containing sentences
      var sentences = {
        "shortNames": [
          "Dim Sum Sam",
          "K town",
          "Poppy Eyes",
          "Calvary Church"
        ],
        "mediumNames": [
          "Pershing Square",
          "New York Public Library, Second floor",
          "Madison Square, the fourth chair from the North.",
          "Bank of American in the 26 street",
          "Academic CD",
          "Chelsea Hotel, corridor"
        ],
        "longNames": [
          "National Academic of Design",
          "Silky Kitchen",
          "Stand Book Store",
          "Coney Island",
          "711"
        ]
      };

      
      function generateRandomSentence() {
        var randomSentence = "";
        var name = $("#name").val().trim();

        if (name !== "") {
          var nameLength = name.length;
          var category;

          if (nameLength <= 4) {
            category = "shortNames";
          } else if (nameLength <= 8) {
            category = "mediumNames";
          } else {
            category = "longNames";
          }

          var sentenceArray = sentences[category];
          if (sentenceArray && sentenceArray.length > 0) {
            randomSentence = sentenceArray[Math.floor(Math.random() * sentenceArray.length)];
            randomSentence = randomSentence.replace("[name]", name);
          }
        }

        $("#result").text(randomSentence);
      }

      
      $("#generateBtn").click(function(e) {
        e.preventDefault();
        generateRandomSentence();
      });
    });