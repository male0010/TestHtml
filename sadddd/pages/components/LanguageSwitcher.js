// LanguageSwitcher.js
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const handleChangeLanguage = (e) => {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่
    const selectedLanguage = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  return (
    <select onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="th">ไทย</option>
    </select>
  );
};

export default LanguageSwitcher;

