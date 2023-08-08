
# Student Dashboard Project

For this assignment, I have built a student dashboard. Users are able to view students in several ways as well as add comments to those students.

1. This front-end application has been successfully deployed to the web. [https://joyful-bubblegum-336a3a.netlify.app/]

#### Front-end features:

 **Student list.** The Home page should shows the list of all students including their name, username (i.e., email), birthday, and profile photo.

 **On-track status.** Each student is marked as either "On Track" or "Off Track." A student is "On Track" if the following is true about them:
   - The student has a resume certification (e.g. `certifications.resume` is `true`).
   - The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`).
   - The student has a GitHub certification (e.g. `certifications.github` is `true`).
   - The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).
   - The student has a current CodeWars score that is over 600.
 
 **Additional student details.** Include a link or button on each student's profile that hides and shows additional information when clicked. This feature should include the following:
   - The text of the button changes depending on whether it is open or closed.
   - The details section includes the percentages for all scores, properly formatted as percentages.
   - The details section includes whether or not the student has received certain certifications showing an emoji depending on the certification status.
   - and finally, the details section DOES NOT open the other details section on the page.

 **1-on-1 section.** Has a section in the student details section that contains information about a student's 1-on-1 with an instructor.
   - The section has a title. (e.g. "1-on-1 Notes".)
   - The section includes a form with commenter name, comment, and a submit button.
   - The section should shows a list of all previous notes that have been added.

**Interactive 1-on-1 section.** Improve the 1-on-1 section with a working form. To complete this feature, the following should be true:
   - The form can be filled out and submitted. On submit, the inputs are cleared.
   - The submitted information is immediately shown in the list of notes.
   - While the notes will not persist if the page is loaded, the new notes _should_ be found if you interact with a new cohort in the cohort list and then find the student.

**Student list count.** The Home also includes a count of how many students are within the data set.

**Unique list of cohorts.** The Home page shows a unique list of cohorts on the page depending on the season you pick.
**Human-readable cohort names.** The list of cohorts should be human-readable (e.g. "Winter 2026" instead of "Winter2026") and ordered alphbetically.
**Clickable cohorts.** When one of the cohorts is clicked from the cohort list, the students shown on the page change so that only those students in the cohort are shown.
1**Cohort title change.** When one of the cohorts is clicked from the cohort list, a heading on the page changes to display what cohort is being shown. The student count also reflects this change.

### Stretch goals
- Add color-coding or segmentation to the On-Track feature. Changing color depending on if they are on track or not


