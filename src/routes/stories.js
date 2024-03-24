const express = require("express");
const router = express.Router();

router.get("/stories", (req, res) => {
  const stories = [
    {
      uid: "1",
      title: "A new beginning",
      description:
        "After facing financial hurdles in a complex family law case, Jane Doe found hope through FTX.Finance. Our platform enabled her to secure the necessary legal representation, resulting in a favorable outcome. 'FTX.Finance was a beacon of hope during one of the most challenging times of my life,' says Jane.",
      firm: "Men's Legal",
      location: "Brisbane, Australia",
      tag: "Family Law",
    },
    {
      uid: "2",
      title: "A brighter future",
      description:
        "John Smith was able to secure funding for his business through FTX.Finance. Our platform connected him with investors who believed in his vision. 'FTX.Finance made it possible for me to turn my dreams into reality,' says John.",
      firm: "FTX Legal",
      location: "Sydney, Australia",
      tag: "Family Law",
    },
    {
      uid: "3",
      title: "Path to Empowerment",
      description:
        "Emily was navigating through a difficult divorce and felt overwhelmed by the legal process. FTX.Finance not only funded her case but also connected her with a community of supporters. 'I am grateful for the financial and emotional support I received, which empowered me to start anew,' Emily expresses.",
      firm: "Not disclosed",
      location: "Melbourne, Australia",
      tag: "Family Law",
    }
  ];

  res.send(stories);
});

module.exports = router;
