# Naye Features Setup — ek-ek karke

Website me 7 naye cheezein add ho chuki hain. 3 turant kaam karengi (bina kuch
kiye), baaki 4 ke liye chhota sa one-time setup chahiye (jaise humne Supabase
ke liye kiya tha).

## ✅ Turant kaam karne wale (kuch setup nahi chahiye)
1. **Privacy Policy page** — Footer me link hai, live hai
2. **Testimonials section** — Home page par, live hai (sample reviews — real
   milte hi replace kar dena, bata dena)
3. **Password security** — Sab naye/existing logins automatically secure ho
   rahe hain
4. **Map on property pages** — Har property ke "Location" section me ab
   asli Google Map dikhega (address ke hisaab se) — koi API key nahi chahiye
5. **Hindi language toggle** — Header me "हिं" button dikhega, click karte hi
   Home page aur navigation Hindi me switch ho jaayega (poori site translate
   nahi hai abhi — sirf sabse zyada dekhe jaane wale hisse)

---

## ⚙️ Setup chahiye — Photo/Video Storage (Supabase)

Abhi images "embed" hoke save hoti hain (heavy). Isko proper storage me
shift karne ke liye:

1. **supabase.com** par apne project me jaao (wahi jo pehle banaya tha)
2. Left sidebar me **"Storage"** par click karo
3. **"New bucket"** dabao
4. Naam do: `property-media`
5. **"Public bucket"** ka toggle **ON** kar do (taaki photos/videos browser
   me dikh sakein)
6. **"Create bucket"** dabao

Bas itna hi — code already ready hai, bucket banate hi naya upload karne
par photos automatically is naye storage me jaayengi (purani jo already
lagi hui hain, wo waisी hi rahengi, unhe chhedne ki zaroorat nahi).

---

## ⚙️ Setup chahiye — Google Analytics (visitors track karna)

1. **analytics.google.com** par jaao, Google account se login karo
2. **"Start measuring"** → apna business naam daalo → property/website
   details bharo
3. Jab **"Data Stream"** banane ko kahe, **"Web"** choose karo, website
   URL daalo: `https://kuldeepyadav63962-arch.github.io/Propertys-Finder/`
4. Ek **"Measurement ID"** milega, jaisa: `G-ABC1234XYZ`
5. Wo ID mujhe bhej do — main website ki file me daal dunga

---

## ⚙️ Setup chahiye — Email Notification (naya lead aane par email)

1. **emailjs.com** par free account banao
2. **"Email Services"** → apna Gmail/Outlook connect karo → ek **Service ID**
   milega
3. **"Email Templates"** → naya template banao (bas ek simple message jisme
   `{{lead_name}}`, `{{lead_phone}}`, `{{property_title}}` jaise fields
   use karna — EmailJS khud dikhata hai kaise) → ek **Template ID** milega
4. **Account → General** me ek **Public Key** milegi
5. Ye teeno (Service ID, Template ID, Public Key) mujhe bhej do — main
   website me daal dunga

---

Jo bhi ready ho jaaye, mujhe bata dena — main turant website update kar
dunga usi ke saath.
