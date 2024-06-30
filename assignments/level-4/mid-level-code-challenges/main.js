

        const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
        // split separate target and alphabetize and then connect words back together 
        const target = 'enlist';
        
        function filterAnagrams(arr, target) {
       
         const sortedTarget = target.split("").sort().join("")
         const newArr = [];
         
         arr.map(word => {
          if(word.split("").sort().join("") === sortedTarget){
            newArr.push(word)
          }
         })
          return newArr
        }

        
        //  const anagrams = filterAnagrams(words, target);
        // console.log(anagrams); // Output: ['listen', 'silent'] 

        const people = [
          { name: 'Alice', age: 30 },
          { name: 'Bob', age: 25 },
          { name: 'Charlie', age: 35 },
          { name: 'David', age: 25 },
          ];

        function sortByMultipleCriteria(people) {
           return  people.sort((a, b) => {
          
            if (a.age !== b.age) {
              return a.age - b.age;
            }
            
            return a.name.localeCompare(b.name);
          });
        }
        console.log(sortByMultipleCriteria(people))
        // const people = [
        // { name: 'Alice', age: 30 },
        // { name: 'Bob', age: 25 },
        // { name: 'Charlie', age: 35 },
        // { name: 'David', age: 25 },
        // ];
        
        // const sortedPeople = sortByMultipleCriteria(people);


        // console.log(sortedPeople);
        
        // Expected outcome: [
        //  { name: 'Bob', age: 25 },
        //  { name: 'David', age: 25 },
        //  { name: 'Alice', age: 30 },
        //  { name: 'Charlie', age: 35 }
        // ]

        // sort the age first then sort the name and there is a certain way to sort strings
           