const { useState } = React;

const quizData = [
    {
      question: "தமிழ் மொழியின் முதல் இலக்கண நூல் எது?",
      options: ["தொல்காப்பியம்", "சங்க இலக்கியம்", "கம்பராமாயணம்", "திருக்குறள்"],
      answer: "தொல்காப்பியம்"
    },
    {
      question: "திருக்குறளை இயற்றியவர் யார்?",
      options: ["தொல்காப்பியர்", "திருவள்ளுவர்", "கம்பர்", "இளங்கோவடிகள்"],
      answer: "திருவள்ளுவர்"
    },
    {
      question: "சிலப்பதிகாரத்தை இயற்றியவர் யார்?",
      options: ["கம்பர்", "இளங்கோவடிகள்", "திருவள்ளுவர்", "ஔவையார்"],
      answer: "இளங்கோவடிகள்"
    },
    {
      question: "தமிழ்நாட்டின் மிகவும் பிரபலமான நடன வடிவம் எது?",
      options: ["பரதநாட்டியம்", "கதகளி", "கூச்சிப்புடி", "மோகினியாட்டம்"],
      answer: "பரதநாட்டியம்"
    },
    {
      question: "பொங்கல் பண்டிகை எந்த மாதத்தில் கொண்டாடப்படுகிறது?",
      options: ["சித்திரை", "தை", "ஆவணி", "மார்கழி"],
      answer: "தை"
    },
    {
      question: "தமிழ் மொழியின் முதல் காப்பியம் எது?",
      options: ["கம்பராமாயணம்", "சிலப்பதிகாரம்", "மணிமேகலை", "திருக்குறள்"],
      answer: "சிலப்பதிகாரம்"
    },
    {
      question: "சோழர் காலத்தில் பிரபலமான கோவில் எது?",
      options: ["தஞ்சாவூர் பெரிய கோவில்", "மதுரை மீனாட்சி கோவில்", "திருவரங்கம் கோவில்", "காஞ்சி கைலாசநாதர் கோவில்"],
      answer: "தஞ்சாவூர் பெரிய கோவில்"
    },
    {
      question: "தமிழில் பயன்படுத்தப்படும் எழுத்துக்களின் எண்ணிக்கை எவ்வளவு?",
      options: ["12", "18", "247", "30"],
      answer: "247"
    },
    {
      question: "‘கண்ணன் பாட்டு’ என்ற படைப்பை இயற்றியவர் யார்?",
      options: ["பாரதியார்", "பாரதிதாசன்", "கவிமணி", "நாமக்கல் கவிஞர்"],
      answer: "பாரதியார்"
    },
    {
      question: "தமிழ்நாட்டின் மாநில மலர் எது?",
      options: ["செங்காந்தள்", "ஜவந்தி", "மல்லிகை", "ரோஜா"],
      answer: "செங்காந்தள்"
    },
    {
      question: "தமிழ் மொழியின் மூன்றாவது சங்கம் எங்கு நடைபெற்றது?",
      options: ["மதுரை", "கபாடபுரம்", "உரையூர்", "காஞ்சிபுரம்"],
      answer: "மதுரை"
    },
    {
      question: "சங்க இலக்கியத்தில் பிரபலமான காதல் காவியம் எது?",
      options: ["குறுந்தொகை", "அகநானூறு", "சிலப்பதிகாரம்", "மணிமேகலை"],
      answer: "சிலப்பதிகாரம்"
    },
    {
      question: "தமிழ் மொழியின் முதல் புலவர் யார்?",
      options: ["திருவள்ளுவர்", "அகத்தியர்", "ஔவையார்", "கம்பர்"],
      answer: "அகத்தியர்"
    },
    {
      question: "தமிழ் மொழியின் மாநில மரம் எது?",
      options: ["வேம்பு", "ஆலமரம்", "பனைமரம்", "மருதமரம்"],
      answer: "பனைமரம்"
    },
    {
      question: "தமிழ் மொழியின் மாநில விலங்கு எது?",
      options: ["சிங்கம்", "நிலைகுதிரை", "மான்", "ஆமை"],
      answer: "நிலைகுதிரை"
    },
    {
      question: "தமிழ் மொழியின் மாநில பறவை எது?",
      options: ["மயில்", "காகம்", "புறா", "கிளி"],
      answer: "மயில்"
    },
    {
      question: "தமிழ் மொழியின் மாநில விளையாட்டு எது?",
      options: ["கபடி", "சிலம்பம்", "வல்லம் பாய்ச்சி", "குத்துச்சண்டை"],
      answer: "கபடி"
    },
    {
      question: "தமிழ் மொழியின் மாநில பாடல் எது?",
      options: ["தமிழ்த்தாய் வாழ்த்து", "வந்தே மாதரம்", "ஜன கண மன", "பாரதியார் பாடல்"],
      answer: "தமிழ்த்தாய் வாழ்த்து"
    },
    {
      question: "தமிழ் மொழியின் மாநில கலை எது?",
      options: ["பரதநாட்டியம்", "கரகாட்டம்", "கூத்து", "பொய்க்கால் குதிரை"],
      answer: "பரதநாட்டியம்"
    },
    {
      question: "தமிழ் மொழியின் மாநில உணவு எது?",
      options: ["இட்லி", "தோசை", "சாம்பார்", "பொங்கல்"],
      answer: "பொங்கல்"
    }
  ];
  
const authors = [
    { name: "திருவள்ளுவர்", works: "திருக்குறள்", era: "சங்க காலம்" },
    { name: "கம்பர்", works: "கம்பராமாயணம்", era: "12ஆம் நூற்றாண்டு" },
    { name: "இளங்கோவடிகள்", works: "சிலப்பதிகாரம்", era: "சங்க காலம்" },
    { name: "ஔவையார்", works: "ஆத்திசூடி, மூதுரை", era: "சங்க காலம் மற்றும் பிற்காலம்" },
    { name: "பாரதியார்", works: "கண்ணன் பாட்டு, பாஞ்சாலி சபதம்", era: "நவீன காலம் (19-20ஆம் நூற்றாண்டு)" },
    { name: "பாரதிதாசன்", works: "குடும்ப விளக்கு, பாண்டியன் பரிசு", era: "நவீன காலம் (20ஆம் நூற்றாண்டு)" },
    { name: "தொல்காப்பியர்", works: "தொல்காப்பியம்", era: "சங்க காலம்" },
    { name: "சேக்கிழார்", works: "பெரியபுராணம்", era: "12ஆம் நூற்றாண்டு" },
    { name: "நக்கீரர்", works: "நெடுநல்வாடை", era: "சங்க காலம்" },
    { name: "கவிமணி தேசிக விநாயகம் பிள்ளை", works: "குயில் பாட்டு", era: "நவீன காலம் (20ஆம் நூற்றாண்டு)" },
    { name: "சாத்தனார்", works: "மணிமேகலை", era: "சங்க காலம்" },
    { name: "கல்கி கிருஷ்ணமூர்த்தி", works: "பொன்னியின் செல்வன், சிவகாமியின் சபதம்", era: "நவீன காலம் (20ஆம் நூற்றாண்டு)" },
    { name: "சுப்ரமணிய சிவா", works: "ஜெயந்தி, கீதாஞ்சலி", era: "நவீன காலம் (20ஆம் நூற்றாண்டு)" },
    { name: "முல்லை", works: "முல்லைப்பாட்டு", era: "சங்க காலம்" },
    { name: "பெருஞ்சித்திரனார்", works: "புறநானூறு", era: "சங்க காலம்" },
    { name: "வள்ளலார்", works: "திருவருட்பா", era: "நவீன காலம் (19ஆம் நூற்றாண்டு)" },
    { name: "சுந்தரராசன்", works: "சங்க இலக்கிய ஆய்வுகள்", era: "நவீன காலம்" },
    { name: "மீனாட்சி சுந்தரம் பிள்ளை", works: "நாலடியார் உரை", era: "நவீன காலம்" },
    { name: "சிலம்பு செல்வன்", works: "சிலம்பு உரை", era: "நவீன காலம்" },
    { name: "அகத்தியர்", works: "அகத்தியம்", era: "முன் சங்க காலம்" },
    { name: "பட்டினத்தார்", works: "பட்டினத்தார் பாடல்கள்", era: "மத்தியகாலம்" },
    { name: "திருமூலர்", works: "திருமந்திரம்", era: "முன் சங்க காலம்" },
    { name: "மணிக்கவாசகர்", works: "திருவாசகம்", era: "மத்தியகாலம்" },
    { name: "அருணகிரிநாதர்", works: "திருப்புகழ்", era: "மத்தியகாலம்" },
    { name: "சம்பந்தர்", works: "தேவாரம்", era: "மத்தியகாலம்" },
    { name: "அப்பர்", works: "தேவாரம்", era: "மத்தியகாலம்" },
    { name: "சுந்தரர்", works: "தேவாரம்", era: "மத்தியகாலம்" },
    { name: "நம்மாழ்வார்", works: "திருவாய்மொழி", era: "மத்தியகாலம்" },
    { name: "ஆண்டாள்", works: "நாச்சியார் திருமொழி", era: "மத்தியகாலம்" },
    { name: "குடவாயிர் கிழார்", works: "பட்டினப்பாலை", era: "சங்க காலம்" },
    { name: "பரணர்", works: "பரிபாடல்", era: "சங்க காலம்" },
    { name: "கபிலர்", works: "அகநானூறு", era: "சங்க காலம்" },
    { name: "அவ்வையார் (பழைய)", works: "குறுந்தொகை", era: "சங்க காலம்" },
    { name: "அவ்வையார் (புதிய)", works: "கொன்றைவேந்தன்", era: "பிற்காலம்" },
    { name: "சிவஞானபோதம்", works: "சிவஞானபோதம்", era: "மத்தியகாலம்" },
    { name: "பெரியாழ்வார்", works: "திருப்பல்லாண்டு", era: "மத்தியகாலம்" },
    { name: "கம்பன்", works: "இராமாவதாரம்", era: "12ஆம் நூற்றாண்டு" },
    { name: "சீனு", works: "சீனு கவிதைகள்", era: "நவீன காலம்" },
    { name: "சுப்ரமணிய பாரதி", works: "சுயமரியாதை பாடல்கள்", era: "நவீன காலம்" },
    { name: "சிலம்பு நாயனார்", works: "சிலம்பு உரை", era: "நவீன காலம்" },
    { name: "புலவர் குணசேகரன்", works: "தமிழ் இலக்கிய வரலாறு", era: "நவீன காலம்" },
    { name: "சங்கரதாஸ் சுவாமிகள்", works: "நாடகங்கள்", era: "நவீன காலம்" },
    { name: "மாரிமுத்து பிள்ளை", works: "திருக்குறள் உரை", era: "நவீன காலம்" },
    { name: "சிவசுப்பிரமணிய சுவாமிகள்", works: "சிவபுராணம்", era: "மத்தியகாலம்" },
    { name: "சோழன்", works: "சோழர் வரலாறு", era: "மத்தியகாலம்" },
    { name: "பாண்டியன்", works: "பாண்டியர் வரலாறு", era: "மத்தியகாலம்" },
    { name: "சேரன்", works: "சேரர் வரலாறு", era: "மத்தியகாலம்" }
];
  
const books = [
    { title: "திருக்குறள்", author: "திருவள்ளுவர்", description: "அறம், பொருள், இன்பம் பற்றிய 1330 குறட்பாக்கள்" },
    { title: "சிலப்பதிகாரம்", author: "இளங்கோவடிகள்", description: "தமிழின் முதல் காப்பியம், கண்ணகியின் கதையை விவரிக்கிறது" },
    { title: "கம்பராமாயணம்", author: "கம்பர்", description: "ராமாயணத்தின் தமிழ் மறு ஆக்கம், கவிதை நடையில்" },
    { title: "மணிமேகலை", author: "சாத்தனார்", description: "பௌத்த காப்பியம், மணிமேகலையின் வாழ்க்கையை விவரிக்கிறது" },
    { title: "தொல்காப்பியம்", author: "தொல்காப்பியர்", description: "தமிழ் மொழியின் முதல் இலக்கண நூல், எழுத்து, சொல், பொருள் பற்றி விளக்குகிறது" },
    { title: "பெரியபுராணம்", author: "சேக்கிழார்", description: "63 நாயன்மார்களின் வாழ்க்கை வரலாறு" },
    { title: "ஆத்திசூடி", author: "ஔவையார்", description: "குழந்தைகளுக்கான அறநெறி வழிகாட்டி" },
    { title: "பாஞ்சாலி சபதம்", author: "பாரதியார்", description: "மகாபாரதத்தின் ஒரு பகுதியை அடிப்படையாகக் கொண்ட கவிதை நூல்" },
    { title: "நற்றிணை", author: "பலர்", description: "சங்க இலக்கியத்தில் அகத்திணை பாடல்களின் தொகுப்பு" },
    { title: "குறுந்தொகை", author: "பலர்", description: "சங்க கால கவிதைகளின் தொகுப்பு, காதல் மற்றும் இயற்கை பற்றி" },
    { title: "பரிபாடல்", author: "பலர்", description: "சங்க இலக்கியத்தில் தெய்வ வழிபாட்டை விவரிக்கும் நூல்" },
    { title: "அகநானூறு", author: "பலர்", description: "அகத்திணை சார்ந்த சங்க இலக்கிய பாடல்களின் தொகுப்பு" },
    { title: "புறநானூறு", author: "பலர்", description: "புறத்திணை சார்ந்த சங்க இலக்கிய பாடல்களின் தொகுப்பு" },
    { title: "திருவாசகம்", author: "மணிக்கவாசகர்", description: "சைவ சமயத்தை விளக்கும் பக்தி பாடல்கள்" },
    { title: "திருமந்திரம்", author: "திருமூலர்", description: "சைவ சமயத்தின் தத்துவங்களை விளக்கும் நூல்" },
    { title: "தேவாரம்", author: "சம்பந்தர், அப்பர், சுந்தரர்", description: "சைவ சமயத்தின் மூன்று முக்கிய நாயன்மார்களின் பக்தி பாடல்கள்" },
    { title: "திருப்புகழ்", author: "அருணகிரிநாதர்", description: "முருகனைப் புகழும் பக்தி பாடல்கள்" },
    { title: "திருப்பாவை", author: "ஆண்டாள்", description: "வைகுண்ட ஏகாதசியை முன்னிட்டு பாடப்பட்ட பக்தி பாடல்கள்" },
    { title: "திருவாய்மொழி", author: "நம்மாழ்வார்", description: "வைணவ சமயத்தின் முக்கிய நூல்" },
    { title: "சிவபுராணம்", author: "சிவசுப்பிரமணிய சுவாமிகள்", description: "சிவபெருமானின் மகிமையை விளக்கும் நூல்" },
    { title: "பட்டினப்பாலை", author: "குடவாயிர் கிழார்", description: "சங்க இலக்கியத்தில் புறத்திணை பாடல்" },
    { title: "முல்லைப்பாட்டு", author: "முல்லை", description: "அகத்திணை சார்ந்த சங்க இலக்கிய பாடல்" },
    { title: "குயில் பாட்டு", author: "கவிமணி தேசிக விநாயகம் பிள்ளை", description: "தமிழ் கவிதைகளின் தொகுப்பு" },
    { title: "சிவஞானபோதம்", author: "சிவஞானபோதம்", description: "சைவ சமயத்தின் தத்துவ நூல்" },
    { title: "நாச்சியார் திருமொழி", author: "ஆண்டாள்", description: "ஆண்டாளின் பக்தி பாடல்கள்" },
    { title: "சங்க இலக்கிய ஆய்வுகள்", author: "சுந்தரராசன்", description: "சங்க இலக்கியத்தின் ஆய்வுகள்" },
    { title: "தமிழ் இலக்கிய வரலாறு", author: "புலவர் குணசேகரன்", description: "தமிழ் இலக்கியத்தின் வரலாற்று ஆய்வு" },
    { title: "சிவகாமியின் சபதம்", author: "கல்கி கிருஷ்ணமூர்த்தி", description: "பாரம்பரிய தமிழ் நாவல்" },
    { title: "பொன்னியின் செல்வன்", author: "கல்கி கிருஷ்ணமூர்த்தி", description: "சோழர் காலத்தை அடிப்படையாகக் கொண்ட வரலாற்று நாவல்" },
    { title: "கொன்றைவேந்தன்", author: "அவ்வையார் (புதிய)", description: "அவ்வையாரின் அறநெறி பாடல்கள்" },
    { title: "சிலம்பு உரை", author: "சிலம்பு செல்வன்", description: "சிலப்பதிகாரத்தின் விளக்க உரை" },
    { title: "திருக்குறள் உரை", author: "மாரிமுத்து பிள்ளை", description: "திருக்குறளின் விளக்க உரை" },
    { title: "சுயமரியாதை பாடல்கள்", author: "சுப்ரமணிய பாரதி", description: "சுதந்திரப் போராட்டத்தை ஊக்குவிக்கும் பாடல்கள்" },
    { title: "கம்பராமாயணம் உரை", author: "சிலம்பு நாயனார்", description: "கம்பராமாயணத்தின் விளக்க உரை" },
    { title: "நாலடியார்", author: "பலர்", description: "சங்க இலக்கியத்தில் அறநெறி பாடல்களின் தொகுப்பு" },
    { title: "பொய்கையாழ்வார் பாடல்கள்", author: "பொய்கையாழ்வார்", description: "வைணவ சமயத்தின் முதல் ஆழ்வாரின் பாடல்கள்" },
    { title: "பட்டினத்தார் பாடல்கள்", author: "பட்டினத்தார்", description: "பட்டினத்தாரின் பக்தி பாடல்கள்" },
    { title: "சங்கரதாஸ் நாடகங்கள்", author: "சங்கரதாஸ் சுவாமிகள்", description: "தமிழ் நாடகங்களின் தொகுப்பு" },
    { title: "திருவள்ளுவர் வரலாறு", author: "பலர்", description: "திருவள்ளுவரின் வாழ்க்கை வரலாறு" }
];
  
const tamilHistory = {
    ancient: "தமிழகத்தின் வரலாறு சிந்து சமவெளி நாகரிகத்துடன் தொடர்புடையது. கீழடி அகழாய்வுகள் தமிழர்களின் பழங்கால நாகரிகத்தை வெளிப்படுத்துகின்றன. சங்க காலத்தில் புலவர்கள் மற்றும் அரசர்கள் தமிழ் இலக்கியத்தை வளர்த்தனர். சங்க இலக்கியங்கள் தமிழர்களின் வாழ்க்கை முறையை, சமூக அமைப்பை, மற்றும் கலாச்சாரத்தை வெளிப்படுத்துகின்றன.",
    medieval: "சோழர், பாண்டியர், சேரர் ஆட்சியில் தமிழகம் பொற்காலம் கண்டது. சோழர்களின் கட்டிடக்கலை, குறிப்பாக தஞ்சாவூர் பெரிய கோவில், உலக பாரம்பரிய சின்னமாக உள்ளது. பல்லவர்களின் மாமல்லபுரம் கோவில்களும் புகழ்பெற்றவை. பாண்டியர்களின் மதுரை மீனாட்சி அம்மன் கோவில் மற்றும் சேரர்களின் கேரளா வரலாற்று தொடர்புகள் குறிப்பிடத்தக்கவை.",
    modern: "பிரிட்டிஷ் ஆட்சியிலிருந்து விடுதலை பெற்று இந்தியாவின் ஒரு பகுதியாக தமிழ்நாடு உருவானது. நவீன தமிழ்நாடு கல்வி, தொழில்நுட்பம், மற்றும் கலாச்சாரத்தில் முன்னணியில் உள்ளது. தமிழ்நாட்டின் மொழி உரிமை இயக்கம் மற்றும் திராவிட இயக்கத்தின் வளர்ச்சி சமூக மாற்றங்களை ஏற்படுத்தியது.",
    colonial: "பிரெஞ்சு மற்றும் ஆங்கிலேயர்களின் காலனி ஆதிக்கத்தில் சென்னை முக்கிய வணிக மையமாக விளங்கியது. விடுதலைப் போராட்டத்தில் தமிழர்களின் பங்கு குறிப்பிடத்தக்கது. சுப்ரமணிய சிவா, வ.உ. சிதம்பரம் பிள்ளை போன்ற தலைவர்கள் விடுதலை இயக்கத்தில் முக்கிய பங்கு வகித்தனர்.",
    contemporary: "21ஆம் நூற்றாண்டில் தமிழ்நாடு தகவல் தொழில்நுட்பம், திரைப்படத்துறை, மற்றும் உற்பத்தித் தொழில்களில் முன்னேறியுள்ளது. சென்னை மற்றும் கோயம்புத்தூர் முக்கிய பொருளாதார மையங்களாக உள்ளன. தமிழ்நாட்டின் சமூக நல திட்டங்கள் மற்றும் கல்வி வளர்ச்சி உலகளவில் பாராட்டப்படுகின்றன.",
    literature: "தமிழ் இலக்கியம் சங்க காலத்திலிருந்து தொடங்கி நவீன காலம் வரை பல்வேறு பரிணாமங்களை கண்டுள்ளது. திருக்குறள், சிலப்பதிகாரம், மற்றும் கம்பராமாயணம் போன்ற நூல்கள் உலகளவில் புகழ்பெற்றவை. நவீன காலத்தில் பாரதியார், பாரதிதாசன் போன்ற கவிஞர்கள் சமூக மாற்றங்களை ஊக்குவித்தனர்.",
    art: "தமிழகத்தின் பாரம்பரிய கலை வடிவங்களில் பரதநாட்டியம், கரகாட்டம், மற்றும் ஒயிலாட்டம் முக்கியமானவை. திருவிழாக்களில் கோலாட்டம் மற்றும் பொய்க்கால் குதிரை ஆட்டம் போன்ற நாட்டுப்புற நடனங்கள் காணப்படும்.",
    architecture: "திராவிட கட்டிடக்கலை தமிழ்நாட்டின் அடையாளமாக விளங்குகிறது. தஞ்சாவூர் பெரிய கோவில், மாமல்லபுரம் சிற்பங்கள், மதுரை மீனாட்சி கோவில் போன்றவை உலக பாரம்பரிய சின்னங்களாக உள்ளன.",
    religion: "தமிழகத்தில் சைவம், வைணவம், பௌத்தம், மற்றும் ஜைனம் போன்ற மதங்கள் வளர்ச்சி பெற்றன. திருவண்ணாமலை, சிரபுரம், மற்றும் ராமேஸ்வரம் போன்ற தலங்கள் முக்கிய புனித தலங்களாக உள்ளன.",
    politics: "திராவிட இயக்கம் தமிழ்நாட்டின் அரசியல் வரலாற்றில் முக்கிய பங்கு வகிக்கிறது. சமூக நீதியை முன்னிறுத்தும் கொள்கைகள் மற்றும் மொழி உரிமை இயக்கங்கள் தமிழக அரசியலின் அடிப்படையாக உள்ளன.",
    education: "தமிழ்நாடு கல்வியில் முன்னேறிய மாநிலமாக விளங்குகிறது. அண்ணா பல்கலைக்கழகம், சென்னை பல்கலைக்கழகம் போன்றவை உயர்கல்வியில் முக்கிய பங்கு வகிக்கின்றன. அரசு பள்ளிகள் மற்றும் சமூக நல திட்டங்கள் கல்வி வளர்ச்சிக்கு உதவுகின்றன.",
    economy: "தமிழ்நாடு இந்தியாவின் முக்கிய பொருளாதார மையமாக உள்ளது. ஆட்டோமொபைல் உற்பத்தி, தகவல் தொழில்நுட்பம், மற்றும் திரைப்படத் துறை தமிழகத்தின் பொருளாதார வளர்ச்சிக்கு முக்கிய பங்களிப்பு செய்கின்றன.",
    cinema: "தமிழ் திரைப்படத் துறை உலகளவில் புகழ்பெற்றது. எம்.ஜி.ஆர், சிவாஜி கணேசன், மற்றும் ரஜினிகாந்த் போன்ற நடிகர்கள் தமிழ் சினிமாவின் அடையாளமாக உள்ளனர். தமிழ் திரைப்படங்கள் சமூக மாற்றங்களை ஊக்குவிக்கும் கருப்பொருள்களை அடிக்கடி வெளிப்படுத்துகின்றன.",
    science: "தமிழகத்தில் அறிவியல் மற்றும் தொழில்நுட்ப வளர்ச்சி முக்கிய பங்கு வகிக்கிறது. இஸ்ரோவின் சதீஷ் தவான் விண்வெளி மையம் மற்றும் சென்னை IIT போன்றவை தமிழகத்தின் அறிவியல் வளர்ச்சியை முன்னேற்றுகின்றன.",
    sports: "தமிழ்நாட்டில் கபடி, சிலம்பம், மற்றும் கிரிக்கெட் போன்ற விளையாட்டுகள் பிரபலமாக உள்ளன. சென்னை சூப்பர் கிங்ஸ் IPL அணியின் வெற்றிகள் தமிழகத்தின் விளையாட்டு ஆர்வத்தை வெளிப்படுத்துகின்றன."
};
  
const culture = {
    dance: "பரதநாட்டியம், கரகாட்டம், ஒயிலாட்டம், மற்றும் பொய்க்கால் குதிரை ஆட்டம் போன்றவை தமிழ் கலாச்சாரத்தின் அடையாளங்கள். பரதநாட்டியம் உலகளவில் புகழ்பெற்ற ஒரு பாரம்பரிய நடனமாகும். கோலாட்டம் மற்றும் கும்மி போன்ற நாட்டுப்புற நடனங்கள் திருவிழாக்களில் முக்கிய பங்கு வகிக்கின்றன.",
    festivals: "பொங்கல், தீபாவளி, தமிழ்ப் புத்தாண்டு, கார்த்திகை தீபம், மற்றும் ஆடிப்பெருக்கு ஆகியவை முக்கிய பண்டிகைகள். பொங்கல் விவசாயிகளின் நன்றி தெரிவிக்கும் பண்டிகையாகும். தைப்பூசம், மாசி மகம், மற்றும் சித்திரை திருவிழா போன்றவை தமிழர்களின் ஆன்மிக பண்டிகைகளாகும்.",
    cuisine: "இட்லி, தோசை, சாம்பார், ரசம், பொங்கல், மற்றும் பருப்பு வடை ஆகியவை தமிழ்நாட்டின் பிரபலமான உணவுகள். மதுரை மற்றும் செட்டிநாடு உணவு வகைகள் தனித்துவமானவை. கொழுக்கட்டை, அப்பம், மற்றும் பாயசம் போன்ற இனிப்பு வகைகள் பண்டிகைகளின் போது பரிமாறப்படும்.",
    music: "கர்நாடக இசை, திரைப்பட இசை, மற்றும் பாரம்பரிய நாட்டுப்புற இசை தமிழ் கலாச்சாரத்தில் முக்கிய பங்கு வகிக்கின்றன. மார்கழி இசை விழா உலகப் புகழ் பெற்றது. நாதஸ்வரம் மற்றும் தவில் போன்ற பாரம்பரிய இசைக்கருவிகள் தமிழர்களின் கலாச்சார அடையாளமாக உள்ளன.",
    attire: "பெண்கள் புடவை மற்றும் ஆண்கள் வேட்டி அணிவது பாரம்பரிய உடை. காஞ்சிபுரம் பட்டு உலகளவில் புகழ்பெற்றது. ஆடம்பரமான திருமணங்களில் பெண்கள் பாரம்பரிய நகைகள் அணிவது வழக்கம்.",
    architecture: "திராவிட கட்டிடக்கலை, குறிப்பாக கோவில்களின் கோபுரங்கள், தமிழகத்தின் தனித்துவமான அடையாளம். மாமல்லபுரம் மற்றும் தஞ்சை கோவில்கள் இதற்கு எடுத்துக்காட்டு. மதுரை மீனாட்சி கோவில் மற்றும் ராமேஸ்வரம் கோவில் போன்றவை உலக பாரம்பரிய சின்னங்களாக உள்ளன.",
    art: "தமிழகத்தின் பாரம்பரிய கலை வடிவங்களில் தஞ்சாவூர் ஓவியங்கள், கைவினை பொருட்கள், மற்றும் பொம்மலாட்டம் முக்கியமானவை. பொம்மலாட்டம் நாட்டுப்புற கலை வடிவமாகும்.",
    theater: "தமிழ் நாடகங்கள் மற்றும் தெருக்கூத்து பாரம்பரிய கலை வடிவங்களாக உள்ளன. சங்கரதாஸ் சுவாமிகள் போன்றவர்கள் தமிழ் நாடக வளர்ச்சியில் முக்கிய பங்கு வகித்தனர்.",
    literature: "தமிழ் இலக்கியம் சங்க காலத்திலிருந்து தொடங்கி நவீன காலம் வரை பல்வேறு பரிணாமங்களை கண்டுள்ளது. திருக்குறள், சிலப்பதிகாரம், மற்றும் கம்பராமாயணம் போன்ற நூல்கள் உலகளவில் புகழ்பெற்றவை. நவீன காலத்தில் பாரதியார், பாரதிதாசன் போன்ற கவிஞர்கள் சமூக மாற்றங்களை ஊக்குவித்தனர்.",
    sports: "தமிழ்நாட்டில் கபடி, சிலம்பம், மற்றும் கிரிக்கெட் போன்ற விளையாட்டுகள் பிரபலமாக உள்ளன. சிலம்பம் பாரம்பரிய போர்க்கலை வடிவமாகும். கிரிக்கெட்டில் சென்னை சூப்பர் கிங்ஸ் அணியின் வெற்றிகள் தமிழகத்தின் விளையாட்டு ஆர்வத்தை வெளிப்படுத்துகின்றன.",
    cinema: "தமிழ் திரைப்படத் துறை உலகளவில் புகழ்பெற்றது. எம்.ஜி.ஆர், சிவாஜி கணேசன், மற்றும் ரஜினிகாந்த் போன்ற நடிகர்கள் தமிழ் சினிமாவின் அடையாளமாக உள்ளனர். தமிழ் திரைப்படங்கள் சமூக மாற்றங்களை ஊக்குவிக்கும் கருப்பொருள்களை அடிக்கடி வெளிப்படுத்துகின்றன.",
    festivals_regional: "தமிழகத்தின் ஒவ்வொரு பகுதியிலும் தனித்துவமான பண்டிகைகள் கொண்டாடப்படுகின்றன. மதுரையில் சித்திரை திருவிழா, காஞ்சிபுரத்தில் வரதராஜ பெருமாள் திருவிழா, மற்றும் திருவண்ணாமலையில் கார்த்திகை தீபம் ஆகியவை குறிப்பிடத்தக்கவை.",
    folk_art: "நாட்டுப்புற கலை வடிவங்களில் கரகாட்டம், ஒயிலாட்டம், மற்றும் பொய்க்கால் குதிரை ஆட்டம் முக்கியமானவை. இவை கிராமப்புறங்களில் திருவிழாக்களில் காணப்படும்.",
    jewelry: "தமிழகத்தின் பாரம்பரிய நகைகள், குறிப்பாக கோலுசு, ஒட்டியாணம், மற்றும் காசுமாலை, பெண்களின் அழகை மேம்படுத்துகின்றன. செட்டிநாடு நகைகள் தனித்துவமான வடிவமைப்புகளைக் கொண்டவை.",
    traditional_games: "பல்லாங்குழி, கபடி, மற்றும் தாயம் போன்ற பாரம்பரிய விளையாட்டுகள் தமிழர்களின் வாழ்க்கை முறையின் ஒரு பகுதியாக இருந்தன. இவை சமூக உறவுகளை மேம்படுத்த உதவுகின்றன.",
    rituals: "தமிழகத்தின் திருமண மற்றும் பிறந்த நாள் சடங்குகள் பாரம்பரியத்தை பிரதிபலிக்கின்றன. கோவில் பூஜைகள் மற்றும் விலாசு பூஜைகள் ஆன்மிக முக்கியத்துவம் வாய்ந்தவை.",
    crafts: "தமிழகத்தின் கைவினை பொருட்களில் தஞ்சாவூர் பொம்மைகள், காஞ்சிபுரம் பட்டு, மற்றும் செட்டிநாடு மரப்பணிகள் முக்கியமானவை. இவை உலகளவில் புகழ்பெற்றவை."
};
  
const learnTamil = {
    alphabet: [
        "அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ", 
        "க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர", 
        "ல", "வ", "ழ", "ள", "ற", "ன"
    ],
    phrases: [
        { tamil: "வணக்கம்", english: "Hello" },
        { tamil: "நன்றி", english: "Thank you" },
        { tamil: "எப்படி இருக்கிறீர்கள்?", english: "How are you?" },
        { tamil: "என் பெயர்", english: "My name is" },
        { tamil: "மீண்டும் சந்திப்போம்", english: "See you again" },
        { tamil: "நல்லது", english: "Good" },
        { tamil: "எனக்கு உதவி தேவை", english: "I need help" },
        { tamil: "இது எவ்வளவு?", english: "How much is this?" },
        { tamil: "உங்கள் பெயர் என்ன?", english: "What is your name?" },
        { tamil: "நான் தமிழில் பேச விரும்புகிறேன்", english: "I want to speak in Tamil" },
        { tamil: "உங்களை சந்தித்ததில் மகிழ்ச்சி", english: "Nice to meet you" },
        { tamil: "உங்கள் உதவிக்கு நன்றி", english: "Thank you for your help" },
        { tamil: "நான் தமிழை கற்றுக்கொள்கிறேன்", english: "I am learning Tamil" },
        { tamil: "நான் தமிழை விரும்புகிறேன்", english: "I love Tamil" },
        { tamil: "இது என்ன?", english: "What is this?" }
    ],
    grammar: "தமிழ் இலக்கணம் எழுத்து, சொல், பொருள், யாப்பு, அணி என பிரிக்கப்படுகிறது. தமிழ் மொழியில் 12 உயிரெழுத்துகள், 18 மெய்யெழுத்துகள், மற்றும் 216 உயிர்மெய்யெழுத்துகள் உள்ளன. வினை, பெயர், இடை, உரி என்பன முக்கிய சொற்கள். வாக்கிய அமைப்பில், செயப்படுபொருள், செய்பொருள், செயல் ஆகியவை அடிப்படையாகும்.",
    vocabulary: [
        { tamil: "வீடு", english: "House" },
        { tamil: "நீர்", english: "Water" },
        { tamil: "மரம்", english: "Tree" },
        { tamil: "புத்தகம்", english: "Book" },
        { tamil: "வானம்", english: "Sky" },
        { tamil: "சூரியன்", english: "Sun" },
        { tamil: "நிலா", english: "Moon" },
        { tamil: "கடல்", english: "Sea" },
        { tamil: "மலை", english: "Mountain" },
        { tamil: "பூ", english: "Flower" },
        { tamil: "குடும்பம்", english: "Family" },
        { tamil: "நண்பர்", english: "Friend" },
        { tamil: "கார்", english: "Car" },
        { tamil: "பள்ளி", english: "School" },
        { tamil: "ஆசிரியர்", english: "Teacher" }
    ],
    resources: "தமிழ் கற்க, தமிழ் இணையப் பல்கலைக்கழகம், தமிழ் விக்கிப்பீடியா, மற்றும் மொபைல் பயன்பாடுகள் உதவியாக இருக்கும். ‘நற்றமிழ்’ மற்றும் ‘தமிழ் கற்க’ போன்ற பயன்பாடுகள் பயனுள்ளவை. மேலும், தமிழ் பாடல்கள் மற்றும் திரைப்படங்கள் மூலம் மொழியை கற்றுக்கொள்ளலாம். தமிழ் புத்தகங்கள் மற்றும் இலக்கியங்கள் மொழி அறிவை மேம்படுத்த உதவும்."
};

// Main App Component
function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswer("");
  };

  const handleAnswer = (option) => {
    setUserAnswer(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
      } else {
        setQuizStarted(false);
      }
    }, 1000);
  };

const renderQuiz = () => {
    if (!quizStarted) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">தமிழ் வினாடி வினா</h2>
                <button
                    onClick={startQuiz}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-full pulse-glow"
                >
                    வினாடி வினாவை தொடங்கு
                </button>
                {score > 0 && (
                    <p className="mt-4 text-white">உங்கள் மதிப்பெண்: {score} / {quizData.length}</p>
                )}
            </div>
        );
    }

    const question = quizData[currentQuestion];
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg slide-in">
            <h2 className="text-xl font-bold mb-4">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
                {question.options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={`p-4 rounded-lg ${
                            userAnswer === option
                                ? option === question.answer
                                    ? "bg-green-500 text-white"
                                    : "bg-red-500 text-white"
                                : "bg-gray-200 hover:bg-yellow-300"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

const renderQuizSummary = () => {
    return (
        <div className="text-center bg-white p-6 rounded-lg shadow-lg slide-in">
            <h2 className="text-2xl font-bold mb-4">வினாடி வினா முடிவுகள்</h2>
            <p className="text-lg mb-4">உங்கள் மொத்த மதிப்பெண்: {score} / {quizData.length}</p>
            <button
                onClick={startQuiz}
                className="bg-yellow-500 text-white px-6 py-2 rounded-full pulse-glow"
            >
                மீண்டும் தொடங்கு
            </button>
        </div>
    );
};

const renderQuizSection = () => {
    if (!quizStarted && currentQuestion === quizData.length) {
        return renderQuizSummary();
    }
    return renderQuiz();
};

const renderLearnTamil = () => (
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 p-6 rounded-lg shadow-lg slide-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-800 animate-fade-in">தமிழ் கற்றல்</h2>
        <h3 className="text-2xl font-semibold text-yellow-900 mb-4 animate-slide-in-left">எழுத்துக்கள்</h3>
        <div className="grid grid-cols-6 gap-4 mb-6 animate-bounce-in">
            {learnTamil.alphabet.map((letter) => (
                <div key={letter} className="text-3xl bg-yellow-200 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {letter}
                </div>
            ))}
        </div>
        <h3 className="text-2xl font-semibold text-yellow-900 mb-4 animate-slide-in-right">பயனுள்ள வாக்கியங்கள்</h3>
        <ul className="list-disc pl-6 mb-6 animate-fade-in">
            {learnTamil.phrases.map((phrase) => (
                <li key={phrase.tamil} className="mb-2 text-lg">
                    <span className="font-bold text-yellow-700">{phrase.tamil}</span> - {phrase.english}
                </li>
            ))}
        </ul>
        <h3 className="text-2xl font-semibold text-yellow-900 mb-4 animate-slide-in-left">இலக்கணம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-yellow-200 p-4 rounded-lg shadow-md">{learnTamil.grammar}</p>
        <h3 className="text-2xl font-semibold text-yellow-900 mb-4 animate-slide-in-right">சொற்கள்</h3>
        <ul className="list-disc pl-6 mb-6 animate-fade-in">
            {learnTamil.vocabulary.map((word) => (
                <li key={word.tamil} className="mb-2 text-lg">
                    <span className="font-bold text-yellow-700">{word.tamil}</span> - {word.english}
                </li>
            ))}
        </ul>
        <h3 className="text-2xl font-semibold text-yellow-900 mb-4 animate-slide-in-left">வளங்கள்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-yellow-200 p-4 rounded-lg shadow-md">{learnTamil.resources}</p>
        <div className="mt-6 flex justify-center animate-zoom-in">
            <img src="https://th.bing.com/th/id/OIP.8ucK4xhWsSliucdXnmqBcwHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Learning Tamil" className="rounded-lg shadow-lg border-4 border-yellow-600" />
        </div>
        <div className="mt-6 flex justify-center animate-zoom-in">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tamil_alphabet_chart.svg" alt="Tamil Alphabets" className="rounded-lg shadow-lg border-4 border-yellow-600" />
        </div>
    </div>
);

const renderHistory = () => (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-6 rounded-lg shadow-lg slide-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 animate-fade-in">தமிழ் வரலாறு</h2>
        <div className="flex justify-center mb-6 animate-zoom-in">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Keeladi_Excavation.jpg" alt="Tamil History" className="rounded-lg shadow-lg border-4 border-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">பண்டைய காலம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.ancient}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">நடுக்காலம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.medieval}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">நவீன காலம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.modern}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">காலனித்துவ காலம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.colonial}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">நிகழ்காலம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.contemporary}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">இலக்கியம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.literature}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">கலை</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.art}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">கட்டிடக்கலை</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.architecture}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">மதம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.religion}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">அரசியல்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.politics}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">கல்வி</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.education}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">பொருளாதாரம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.economy}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">திரைப்படம்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.cinema}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">அறிவியல்</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.science}</p>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">விளையாட்டு</h3>
        <p className="text-lg mb-6 animate-fade-in bg-blue-200 p-4 rounded-lg shadow-md">{tamilHistory.sports}</p>
        <div className="flex justify-center mt-6 animate-zoom-in">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Brihadeeswarar_Temple_Front_View.jpg" alt="Tamil Culture" className="rounded-lg shadow-lg border-4 border-blue-600" />
        </div>
    </div>
);

const renderCulture = () => (
    <div className="bg-gradient-to-r from-pink-100 via-pink-300 to-pink-500 p-6 rounded-lg shadow-lg slide-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-800 animate-fade-in">தமிழ் பண்பாடு</h2>
        <div className="flex justify-center mb-6 animate-zoom-in">
            <img src="https://via.placeholder.com/300x200" alt="Tamil Culture" className="rounded-lg shadow-lg border-4 border-pink-600" />
        </div>
        {Object.entries(culture).map(([key, value]) => (
            <div key={key} className="mb-6 animate-slide-in-left">
                <h3 className="text-2xl font-semibold text-pink-900 mb-2 capitalize">{key}</h3>
                <p className="text-lg bg-pink-200 p-4 rounded-lg shadow-md">{value}</p>
            </div>
        ))}
    </div>
);

const renderAuthors = () => (
    <div className="bg-gradient-to-r from-green-100 via-green-300 to-green-500 p-6 rounded-lg shadow-lg slide-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800 animate-fade-in">தமிழ் எழுத்தாளர்கள்</h2>
        <div className="grid grid-cols-2 gap-4 animate-bounce-in">
            {authors.map((author) => (
                <div key={author.name} className="p-4 bg-green-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    <h3 className="font-semibold text-green-900">{author.name}</h3>
                    <p className="text-green-800">படைப்புகள்: {author.works}</p>
                    <p className="text-green-800">காலம்: {author.era}</p>
                </div>
            ))}
        </div>
    </div>
);

const renderBooks = () => (
    <div className="bg-gradient-to-r from-purple-100 via-purple-300 to-purple-500 p-6 rounded-lg shadow-lg slide-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800 animate-fade-in">தமிழ் நூல்கள்</h2>
        <div className="grid grid-cols-2 gap-4 animate-zoom-in">
            {books.map((book) => (
                <div key={book.title} className="p-4 bg-purple-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    <h3 className="font-semibold text-purple-900">{book.title}</h3>
                    <p className="text-purple-800">ஆசிரியர்: {book.author}</p>
                    <p className="text-purple-800">{book.description}</p>
                </div>
            ))}
        </div>
        <div className="flex justify-center mt-6 animate-zoom-in">
            <img src="https://via.placeholder.com/300x200" alt="Books" className="rounded-lg shadow-lg border-4 border-purple-600" />
        </div>
    </div>
);

return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 flex flex-col">
        <nav className="bg-yellow-700 p-4 shadow-lg animate-slide-in-down sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-extrabold text-white animate-bounce tracking-wider">தமிழ் உலகம்</h1>
                <div className="space-x-4">
                    {["home", "quiz", "learn", "history", "culture", "authors", "books"].map((section) => (
                        <button
                            key={section}
                            onClick={() => setCurrentSection(section)}
                            className={`text-white hover:text-yellow-300 transition-transform transform hover:scale-110 ${
                                currentSection === section ? "underline font-bold" : ""
                            }`}
                        >
                            {section === "home" ? "முகப்பு" :
                             section === "quiz" ? "வினாடி வினா" :
                             section === "learn" ? "தமிழ் கற்றல்" :
                             section === "history" ? "வரலாறு" :
                             section === "culture" ? "பண்பாடு" :
                             section === "authors" ? "எழுத்தாளர்கள்" : "நூல்கள்"}
                        </button>
                    ))}
                </div>
            </div>
        </nav>

        <div className="container mx-auto p-6 flex-grow">
            {currentSection === "home" && (
                <div className="text-center text-white slide-in">
                    <h2 className="text-4xl font-extrabold mb-4 animate-fade-in tracking-wide">தமிழ் உலகத்திற்கு வரவேற்கிறோம்!</h2>
                    <p className="text-lg animate-slide-in-left leading-relaxed">
                        தமிழ் மொழி, வரலாறு, பண்பாடு, எழுத்தாளர்கள் மற்றும் பலவற்றைப் பற்றி அறிய இந்த இணையதளம் உங்களுக்கு உதவும்.
                    </p>
                    <div className="mt-6 flex justify-center animate-zoom-in">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/013/872/175/large_2x/tanjore-big-temple-or-brihadeshwara-temple-was-built-by-king-raja-raja-cholan-in-thanjavur-tamil-nadu-it-is-the-very-oldest-and-tallest-temple-in-india-this-temple-listed-in-unesco-s-heritage-site-free-photo.jpg"
                            alt="Tamil Heritage"
                            className="rounded-lg shadow-lg border-4 border-yellow-600 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            )}
            {currentSection === "quiz" && renderQuizSection()}
            {currentSection === "learn" && renderLearnTamil()}
            {currentSection === "history" && renderHistory()}
            {currentSection === "culture" && renderCulture()}
            {currentSection === "authors" && renderAuthors()}
            {currentSection === "books" && renderBooks()}
        </div>

        <footer className="bg-yellow-700 text-white text-center py-4 mt-auto shadow-inner">
            <p className="text-lg font-semibold animate-fade-in">Created by Bharathidasan R</p>
            <p className="text-sm animate-slide-in-up">© 2025 தமிழ் உலகம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </footer>
    </div>
);
}

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));