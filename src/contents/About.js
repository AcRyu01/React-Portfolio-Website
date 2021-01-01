import React, { Component } from "react";
import profilepic from "../img/p01.jpg";

class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic">About Me</h1>
        <img src={profilepic} alt="profile" className="profilepic" />
        <h3>Who am I ?</h3>
        <p className="thai" >
          สวัสดีครับ ผม อชิระ ชั่งชัย หรือริว กำลังศึกษาอยู่ชั้นม.6
          โรงเรียนอัสสัมชัญศรีราชา จังหวัดชลบุรีครับ อยากที่จะเป็น Fullstack
          Developer และ
          อยากที่จะเข้าคณะวิศวกรรมคอมพิวเตอร์หรือวิทยาการคอมพิวเตอร์ครับ
        </p>
      </div>
    );
  }
}

export default About;
