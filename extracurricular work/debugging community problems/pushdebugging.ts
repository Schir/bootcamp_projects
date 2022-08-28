//another day, another day of debugging someone else's code.
//they said the problem that it wasn't adding the empty arrays that they were pushing.
type Dates = {
  startDate: string;
  endDate: string;
};

const createObj = (start, end): Dates => {
  return { startDate: start, endDate: end };
};

const extractDates = (customer: any) => {
  const arr: any[] = [];
  if (
    typeof customer.ListOfPeriods === "undefined" ||
    customer.ListOfPeriods === null
  ) {
    //to which I and the other guy looking at the problem were saying, what empty arrays?
    //arr.push();
    //arr.push() does nothing. try arr.push([]); if you want to push an empty array.
    //ah okay, looks like the guy just wants nothing in the array he declared up there. 
  }

  const data = customer.ListOfPeriods.replace(/\s/g, "").split("-");
  const temp = [];
  data.forEach((x) => {
    if (x === "NULL") {
      ///there's another one down here
      //arr.push();

    } else if (x.indexOf("|") !== -1) {
      x.split("|").forEach((num) => {
        if (num.length === 10) {
          temp.push(num);
        } else {
          console.error("ERROR");
        }
      });
    } else {
      if (x.length === 10) {
        temp.push(x);
      }
    }
  });

  for (let i = 0; i < temp.length; i += 2) {
    arr.push(createObj(temp[i], temp[i + 1]));
  }

  console.log(arr);
  return arr;
};

export default extractDates;

//no idea if that's solved the guy's problem. he just stopped responding and it's a bit difficult to keep debugging if you're not getting any response
//maybe his problem was solved, maybe it wasn't. hard to tell when you've just been given a block of code devoid of any context or tests to show what the
//expected response is supposed to be.
