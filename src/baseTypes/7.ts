enum Day {
  Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

function isWeekend(day: Day): boolean {
  
  if (day === Day.Sat || day === Day.Sun) {
    console.log("It's weekend!");
    return true;
  }

  return false;
}