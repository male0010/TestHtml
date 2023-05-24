import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Front Deweloper": "Front Deweloper",
      "Tinnapat Lekphet": "Tinnapat Lekphet",
      "FAQ": "FAQ",
      " Tell: 092-835-5879": " Tell: 092-835-5879",
      "Email: maleaf0@gmail.com": "Email: maleaf0@gmail.com",
      "Address: 82/312 bangkae, bangkae, bangkok 10160": "Address: 82/312 bangkae, bangkae, bangkok 10160",
 "About Me": "About Me",
    "My name tinnapat lekphet Computer Engineer. I would like to intern in IOT and I would like to use the knowledge gained from the internship in your organization to build my future. And I am ready to learn new things from this internship. And I am very interested in doing an internship at your company": "My name tinnapat lekphet Computer Engineer. I would like to intern in IOT and I would like to use the knowledge gained from the internship in your organization to build my future. And I am ready to learn new things from this internship. And I am very interested in doing an internship at your company",
     "My Skill": "My Skill",
      

      "Sign in.": "Sign in.",
    }
  },
  th: {
    translation: {

      "Front Deweloper": "นักพัฒนาส่วนด้านหน้า",
      " Tell: 092-835-5879": "โทร : 092-835-5879",
      "Email: maleaf0@gmail.com": "อีเมล์: maleaf0@gmail.com",
      "Address: 82/312 bangkae, bangkae, bangkok 10160": "ที่อยู่: 82/312 บางแค บางแค กรุงเทพมหานคร 10160",
 "About Me": "เกี่ยวกับฉัน",
       "My name tinnapat lekphet Computer Engineer. I would like to intern in IOT and I would like to use the knowledge gained from the internship in your organization to build my future. And I am ready to learn new things from this internship. And I am very interested in doing an internship at your company": "ฉันชื่อ ทินภัทร เหล็กเพชร วิศวกรคอมพิวเตอร์ ฉันอยากฝึกงานด้าน IOT และอยากใช้ความรู้ที่ได้รับจากการฝึกงานในองค์กรของคุณเพื่อสร้างอนาคตของฉัน และพร้อมที่จะเรียนรู้สิ่งใหม่ๆ จากการฝึกงานครั้งนี้ และผมสนใจที่จะฝึกงานที่บริษัทของคุณมาก",
     "My Skill": "ทักษะของฉัน",
     
      "Tinnapat Lekphet": "นายทินภัทร เหล็กเพชร",
      "FAQ": "หกหกหก",
      "Collect website leads with embedded forms and integrate easily.": "รวบรวมลูกค้าเป้าหมายของเว็บไซต์ด้วยแบบฟอร์มที่ฝังไว้และผสานรวมได้อย่างง่ายดาย",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en,th",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;