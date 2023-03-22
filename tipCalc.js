
<script type="text/javascript">
      function calculateTip() {
        var billAmt = document.getElementById("totalBill").value;
        var serviceQuality = document.getElementById("serviceQuality").value;
        var numPeople = document.getElementById("totalGuests").value;

        if (billAmt === "" || serviceQuality == 0) {
          alert("Please enter values to calculate the tip");
          return;
        }

        if (numPeople === "" || numPeople <= 1) {
          numPeople = 1;
          document.getElementById("each").style.display = "none";
        } else {
          document.getElementById("each").style.display = "block";
        }

        var total = (billAmt * serviceQuality) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);

        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
      }
    </script>