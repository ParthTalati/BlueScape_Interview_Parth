// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
/*

public function clickDateOnDatePicker($date)
    {
        list($month, $day, $year) = explode('/', $date);
        $element = sprintf("//input[@name='g7-date']", $month - 1, $year, ltrim($day, '0'));
        $this->clickElement($element);
        $this->waitForElementNotVisible($element);
        return $this;
    }

*/