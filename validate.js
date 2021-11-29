var fs = require("fs");
var resumeSchema = require("resume-schema");
var resumeObject = JSON.parse(fs.readFileSync("nomaan.resume.json", "utf8"));

resumeSchema.validate(resumeObject, (err, report) => {
  if (err) {
    console.error("The resume was invalid:", err);
    return;
  }
  console.log("Resume validated successfully:", report);
});
