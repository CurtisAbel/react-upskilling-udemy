
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

 



/**
 * const socialMediaTimeline{
 * 
 * author: 'Simon',
 * timeline: [],
 * followers: 10
 * 
 * 
 * }
 */


describe('Social Network', () =>{
    describe("Personal timeline", () => {
        test("can add a post [string] to a timeline", async () => {
          const testTimeLine = [];
         
          testTimeLine.push('Hello World');
         
          const actual = testTimeLine.length;
      
          expect(actual).toEqual(1);
          })
        
        test('Can view author of timeline', () =>{
            const testTimeLine = [];

          testTimeLine[0] = ({author: 'atul', text: 'hello world'})
            
          expect(testTimeLine[0].author !== null);
        })
        
        test("Users are able to follow authors", () => {
            let testFollowerCount = 0;

            const user = 1;
            testFollowerCount += user;
            expect(testFollowerCount).toEqual(1);
        })
    })
})


