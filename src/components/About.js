import NavigationBar from "./Navbar/Navbar";

function About() {
  return (
    <div>
      <NavigationBar />
      <div className="body2">
        <h4>About us</h4>
        TechSWAP is a start-up company initiated by a group of enthusiastic IIT
        Madras.
        <h4 className="pt-4">Vision</h4>TechSWAP main aim is “To develop decent
        knowledge and improve technical skills on engineering stream subjects by
        conducting Seminars & Workshops. TechSWAP open the knowledge doors of
        the students’ which is constrain only for the classrooms to the
        field/practical. Further it also deals the students undergraduate (i.e.
        B.Tech/B.E.) and postgraduate (M.Tech/M.E.) projects which are useful
        for the society along for their bright future”.
      </div>
      <div className="contact">
        <h4>Contact Us</h4>
        <p>TechSWAP</p>
        <p>
          Nirmaan, Opp. Bhadra Hostel
          <br />
          IIT Madras.
        </p>
        <p>Phone:08754517751</p>
        <p>Email: venkateshiitm15@gmail.com</p>
      </div>
    </div>
  );
}

export default About;
