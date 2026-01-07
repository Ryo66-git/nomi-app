"use client";

interface AvatarProps {
  characterId: string;
  isSpeaking?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Avatar({ characterId, isSpeaking = false, size = "md" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-32 h-32",
  };

  const sizeValue = size === "sm" ? 32 : size === "md" ? 48 : size === "lg" ? 64 : size === "xl" ? 128 : 120;

  const renderAvatar = () => {
    switch (characterId) {
      case "takeshi":
        return (
          <svg
            width={sizeValue}
            height={sizeValue}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isSpeaking ? "avatar-speaking" : ""}
          >
            <defs>
              <radialGradient id="takeshiGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#FFE5B4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFE5B4" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="takeshiHair" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D2691E" />
                <stop offset="100%" stopColor="#8B4513" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#takeshiGlow)" />
            
            {/* 顔の輪郭（丸く可愛く） */}
            <circle cx="50" cy="50" r="42" fill="#FFE5B4" />
            <circle cx="50" cy="48" r="40" fill="#FFD89B" />
            
            {/* 髪（かわいい髪型） */}
            <path
              d="M15 30 Q15 10, 35 8 Q50 4, 65 8 Q85 10, 85 30 Q85 35, 80 42 Q75 48, 65 52 Q55 54, 50 54 Q45 54, 35 52 Q25 48, 20 42 Q15 35, 15 30"
              fill="url(#takeshiHair)"
            />
            <path
              d="M20 32 Q30 28, 40 30 Q50 28, 60 30 Q70 28, 80 32"
              fill="#A0522D"
            />
            {/* 前髪 */}
            <path
              d="M 30 25 Q 35 20, 40 25 Q 45 20, 50 25 Q 55 20, 60 25 Q 65 20, 70 25"
              fill="#CD853F"
            />
            
            {/* 左目（VTuber風の大きな目） */}
            <ellipse cx="38" cy="48" rx="11" ry="13" fill="#FFFFFF" />
            <ellipse cx="38" cy="48" rx="10" ry="12" fill="#000000" />
            <ellipse cx="40" cy="46" rx="6" ry="7" fill="#4169E1" />
            <ellipse cx="41" cy="45" rx="3" ry="3.5" fill="#000000" />
            <ellipse cx="42" cy="44" rx="1.5" ry="2" fill="#FFFFFF" />
            <ellipse cx="35" cy="46" rx="3" ry="4" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="39" cy="43" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.7" />
            {/* まつげ */}
            <path d="M 30 46 Q 32 44, 34 46" stroke="#000" strokeWidth="1.5" fill="none" />
            <path d="M 30 48 Q 32 46, 34 48" stroke="#000" strokeWidth="1.5" fill="none" />
            
            {/* 右目 */}
            <ellipse cx="62" cy="48" rx="11" ry="13" fill="#FFFFFF" />
            <ellipse cx="62" cy="48" rx="10" ry="12" fill="#000000" />
            <ellipse cx="64" cy="46" rx="6" ry="7" fill="#4169E1" />
            <ellipse cx="65" cy="45" rx="3" ry="3.5" fill="#000000" />
            <ellipse cx="66" cy="44" rx="1.5" ry="2" fill="#FFFFFF" />
            <ellipse cx="59" cy="46" rx="3" ry="4" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="63" cy="43" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.7" />
            {/* まつげ */}
            <path d="M 66 46 Q 68 44, 70 46" stroke="#000" strokeWidth="1.5" fill="none" />
            <path d="M 66 48 Q 68 46, 70 48" stroke="#000" strokeWidth="1.5" fill="none" />
            
            {/* 眉毛（かわいいカーブ） */}
            <path d="M 28 38 Q 38 34, 48 38" stroke="#8B4513" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 52 38 Q 62 34, 72 38" stroke="#8B4513" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* 鼻（小さくかわいく） */}
            <ellipse cx="50" cy="58" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.6" />
            
            {/* 口（かわいい笑顔） */}
            <path
              d="M 38 68 Q 50 76, 62 68"
              stroke="#000"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="70" rx="12" ry="6" fill="#FF69B4" opacity="0.4" />
            
            {/* 頬の赤み（かわいく） */}
            <ellipse cx="28" cy="62" rx="6" ry="5" fill="#FFB6C1" opacity="0.8" />
            <ellipse cx="72" cy="62" rx="6" ry="5" fill="#FFB6C1" opacity="0.8" />
          </svg>
        );

      case "yuki":
        return (
          <svg
            width={sizeValue}
            height={sizeValue}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isSpeaking ? "avatar-speaking" : ""}
          >
            <defs>
              <radialGradient id="yukiGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#E8E8E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E8E8E8" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="yukiHair" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2C1810" />
                <stop offset="100%" stopColor="#1A1A1A" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#yukiGlow)" />
            
            {/* 顔の輪郭（丸く可愛く） */}
            <circle cx="50" cy="50" r="42" fill="#F5DEB3" />
            <circle cx="50" cy="48" r="40" fill="#F0E68C" />
            
            {/* 髪（長め、かわいい髪型） */}
            <path
              d="M10 35 Q10 12, 28 10 Q42 6, 52 10 Q62 6, 72 10 Q90 12, 90 35 Q90 42, 85 50 Q80 58, 72 65 Q64 72, 50 75 Q36 72, 28 65 Q20 58, 15 50 Q10 42, 10 35"
              fill="url(#yukiHair)"
            />
            <path
              d="M15 40 Q25 35, 35 38 Q50 35, 65 38 Q75 35, 85 40"
              fill="#1A1A1A"
            />
            {/* 前髪 */}
            <path
              d="M 25 30 Q 30 25, 35 30 Q 40 25, 45 30 Q 50 25, 55 30 Q 60 25, 65 30 Q 70 25, 75 30"
              fill="#2C1810"
            />
            {/* サイドの髪 */}
            <path d="M 12 50 Q 15 60, 18 65" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 88 50 Q 85 60, 82 65" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* 左目（VTuber風の大きな目） */}
            <ellipse cx="38" cy="50" rx="10" ry="12" fill="#FFFFFF" />
            <ellipse cx="38" cy="50" rx="9" ry="11" fill="#000000" />
            <ellipse cx="40" cy="48" rx="5" ry="6" fill="#9370DB" />
            <ellipse cx="41" cy="47" rx="2.5" ry="3" fill="#000000" />
            <ellipse cx="42" cy="46" rx="1.5" ry="2" fill="#FFFFFF" />
            <ellipse cx="35" cy="48" rx="2.5" ry="3.5" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="39" cy="45" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.7" />
            
            {/* 右目 */}
            <ellipse cx="62" cy="50" rx="10" ry="12" fill="#FFFFFF" />
            <ellipse cx="62" cy="50" rx="9" ry="11" fill="#000000" />
            <ellipse cx="64" cy="48" rx="5" ry="6" fill="#9370DB" />
            <ellipse cx="65" cy="47" rx="2.5" ry="3" fill="#000000" />
            <ellipse cx="66" cy="46" rx="1.5" ry="2" fill="#FFFFFF" />
            <ellipse cx="59" cy="48" rx="2.5" ry="3.5" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="63" cy="45" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.7" />
            
            {/* 眉毛（まっすぐ、かわいく） */}
            <line x1="30" y1="40" x2="46" y2="40" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="54" y1="40" x2="70" y2="40" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* 鼻（小さくかわいく） */}
            <ellipse cx="50" cy="58" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.6" />
            
            {/* 口（穏やかでかわいい） */}
            <path
              d="M 44 70 Q 50 74, 56 70"
              stroke="#000"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="71" rx="6" ry="3" fill="#FF69B4" opacity="0.3" />
            
            {/* 頬の赤み */}
            <ellipse cx="28" cy="62" rx="5" ry="4" fill="#FFB6C1" opacity="0.7" />
            <ellipse cx="72" cy="62" rx="5" ry="4" fill="#FFB6C1" opacity="0.7" />
          </svg>
        );

      case "kenji":
        return (
          <svg
            width={sizeValue}
            height={sizeValue}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isSpeaking ? "avatar-speaking" : ""}
          >
            <defs>
              <radialGradient id="kenjiGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#FFE4E1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFE4E1" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="kenjiHair" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6347" />
                <stop offset="100%" stopColor="#FF4500" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#kenjiGlow)" />
            
            {/* 顔の輪郭（丸く可愛く） */}
            <circle cx="50" cy="50" r="42" fill="#FFE4B5" />
            <circle cx="50" cy="48" r="40" fill="#FFD700" />
            
            {/* 髪（短め、元気、かわいい髪型） */}
            <path
              d="M15 28 Q15 8, 35 6 Q50 2, 65 6 Q85 8, 85 28 Q85 33, 80 40 Q75 46, 65 50 Q55 52, 50 52 Q45 52, 35 50 Q25 46, 20 40 Q15 33, 15 28"
              fill="url(#kenjiHair)"
            />
            <path
              d="M22 32 Q32 28, 42 30 Q50 28, 58 30 Q68 28, 78 32"
              fill="#FF6347"
            />
            {/* 前髪（はねている感じ） */}
            <path
              d="M 28 22 Q 32 18, 36 22 Q 40 18, 44 22 Q 48 18, 52 22 Q 56 18, 60 22 Q 64 18, 68 22 Q 72 18, 76 22"
              fill="#FF8C00"
            />
            {/* ツンツンした部分 */}
            <path d="M 30 20 Q 32 15, 34 20" stroke="#FF4500" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 66 20 Q 68 15, 70 20" stroke="#FF4500" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* 左目（VTuber風の超大きな目、元気） */}
            <ellipse cx="36" cy="50" rx="13" ry="15" fill="#FFFFFF" />
            <ellipse cx="36" cy="50" rx="12" ry="14" fill="#000000" />
            <ellipse cx="39" cy="48" rx="7" ry="8" fill="#FF1493" />
            <ellipse cx="40" cy="47" rx="3.5" ry="4" fill="#000000" />
            <ellipse cx="41" cy="46" rx="2" ry="2.5" fill="#FFFFFF" />
            <ellipse cx="32" cy="48" rx="3.5" ry="4.5" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="38" cy="44" rx="2.5" ry="3" fill="#FFFFFF" opacity="0.7" />
            {/* まつげ */}
            <path d="M 26 46 Q 28 44, 30 46" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M 26 48 Q 28 46, 30 48" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M 26 50 Q 28 48, 30 50" stroke="#000" strokeWidth="2" fill="none" />
            
            {/* 右目 */}
            <ellipse cx="64" cy="50" rx="13" ry="15" fill="#FFFFFF" />
            <ellipse cx="64" cy="50" rx="12" ry="14" fill="#000000" />
            <ellipse cx="67" cy="48" rx="7" ry="8" fill="#FF1493" />
            <ellipse cx="68" cy="47" rx="3.5" ry="4" fill="#000000" />
            <ellipse cx="69" cy="46" rx="2" ry="2.5" fill="#FFFFFF" />
            <ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="66" cy="44" rx="2.5" ry="3" fill="#FFFFFF" opacity="0.7" />
            {/* まつげ */}
            <path d="M 70 46 Q 72 44, 74 46" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M 70 48 Q 72 46, 74 48" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M 70 50 Q 72 48, 74 50" stroke="#000" strokeWidth="2" fill="none" />
            
            {/* 眉毛（大きく上がっている） */}
            <path d="M 24 38 Q 36 30, 48 38" stroke="#FF4500" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 52 38 Q 64 30, 76 38" stroke="#FF4500" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            
            {/* 鼻（小さくかわいく） */}
            <ellipse cx="50" cy="58" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.6" />
            
            {/* 口（超大きく笑っている、かわいく） */}
            <path
              d="M 32 72 Q 50 82, 68 72"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="74" rx="18" ry="8" fill="#FF69B4" opacity="0.4" />
            
            {/* 頬の赤み（大きく） */}
            <ellipse cx="24" cy="64" rx="7" ry="6" fill="#FF69B4" opacity="0.9" />
            <ellipse cx="76" cy="64" rx="7" ry="6" fill="#FF69B4" opacity="0.9" />
          </svg>
        );

      case "sakura":
        return (
          <svg
            width={sizeValue}
            height={sizeValue}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isSpeaking ? "avatar-speaking" : ""}
          >
            <defs>
              <radialGradient id="sakuraGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#FFE4E1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFE4E1" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="sakuraHair" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB6C1" />
                <stop offset="100%" stopColor="#FF69B4" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#sakuraGlow)" />
            
            {/* 顔の輪郭（丸く可愛く） */}
            <circle cx="50" cy="50" r="42" fill="#FFE4E1" />
            <circle cx="50" cy="48" r="40" fill="#FFCCCB" />
            
            {/* 髪（優しい印象、かわいい髪型） */}
            <path
              d="M12 35 Q12 15, 28 12 Q42 8, 52 12 Q62 8, 72 12 Q88 15, 88 35 Q88 42, 84 50 Q80 58, 72 65 Q64 72, 50 75 Q36 72, 28 65 Q20 58, 16 50 Q12 42, 12 35"
              fill="url(#sakuraHair)"
            />
            <path
              d="M18 40 Q28 35, 38 38 Q50 35, 62 38 Q72 35, 82 40"
              fill="#FF69B4"
            />
            {/* 前髪 */}
            <path
              d="M 22 30 Q 28 25, 34 30 Q 40 25, 46 30 Q 50 25, 54 30 Q 60 25, 66 30 Q 72 25, 78 30"
              fill="#FFC0CB"
            />
            {/* サイドの髪（ツインテール風） */}
            <path d="M 10 50 Q 12 60, 15 68" stroke="#FF69B4" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 90 50 Q 88 60, 85 68" stroke="#FF69B4" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* リボン（かわいく） */}
            <path
              d="M 44 20 Q 50 14, 56 20 Q 56 26, 50 30 Q 44 26, 44 20"
              fill="#FF1493"
            />
            <circle cx="47" cy="22" r="2" fill="#FFFFFF" />
            <circle cx="53" cy="22" r="2" fill="#FFFFFF" />
            <path
              d="M 46 18 Q 50 16, 54 18"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              fill="none"
            />
            
            {/* 左目（VTuber風の大きな目、優しい色） */}
            <ellipse cx="38" cy="50" rx="11" ry="13" fill="#FFFFFF" />
            <ellipse cx="38" cy="50" rx="10" ry="12" fill="#000000" />
            <ellipse cx="40" cy="48" rx="6" ry="7" fill="#FF69B4" />
            <ellipse cx="41" cy="47" rx="3" ry="3.5" fill="#000000" />
            <ellipse cx="42" cy="46" rx="1.5" ry="2" fill="#FFFFFF" />
            <ellipse cx="35" cy="48" rx="3" ry="4" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="39" cy="45" rx="2.5" ry="3" fill="#FFFFFF" opacity="0.7" />
            {/* まつげ */}
            <path d="M 30 46 Q 32 44, 34 46" stroke="#000" strokeWidth="1.5" fill="none" />
            <path d="M 30 48 Q 32 46, 34 48" stroke="#000" strokeWidth="1.5" fill="none" />
            
            {/* 右目 */}
            <ellipse cx="62" cy="50" rx="11" ry="13" fill="#FFFFFF" />
            <ellipse cx="62" cy="50" rx="10" ry="12" fill="#000000" />
            <ellipse cx="64" cy="48" rx="6" ry="7" fill="#FF69B4" />
            <ellipse cx="65" cy="47" rx="3" ry="3.5" fill="#000000" />
            <ellipse cx="66" cy="46" rx="1.5" ry="2" fill="#FFFFFF" />
            <ellipse cx="59" cy="48" rx="3" ry="4" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="63" cy="45" rx="2.5" ry="3" fill="#FFFFFF" opacity="0.7" />
            {/* まつげ */}
            <path d="M 66 46 Q 68 44, 70 46" stroke="#000" strokeWidth="1.5" fill="none" />
            <path d="M 66 48 Q 68 46, 70 48" stroke="#000" strokeWidth="1.5" fill="none" />
            
            {/* 眉毛（優しいカーブ） */}
            <path d="M 28 40 Q 38 36, 48 40" stroke="#FF69B4" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 52 40 Q 62 36, 72 40" stroke="#FF69B4" strokeWidth="3" fill="none" strokeLinecap="round" />
            
            {/* 鼻（小さくかわいく） */}
            <ellipse cx="50" cy="58" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.6" />
            
            {/* 口（優しい笑顔、かわいく） */}
            <path
              d="M 40 70 Q 50 76, 60 70"
              stroke="#000"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="71" rx="10" ry="5" fill="#FF69B4" opacity="0.4" />
            
            {/* 頬の赤み（照れ、大きく） */}
            <ellipse cx="26" cy="64" rx="7" ry="6" fill="#FFB6C1" opacity="0.9" />
            <ellipse cx="74" cy="64" rx="7" ry="6" fill="#FFB6C1" opacity="0.9" />
            
            {/* 小さなハート（かわいく） */}
            <path
              d="M 48 78 Q 46 76, 44 78 Q 46 80, 48 82 Q 50 80, 52 78 Q 50 76, 48 78"
              fill="#FF69B4"
              opacity="0.7"
            />
            <path
              d="M 52 78 Q 50 76, 48 78 Q 50 80, 52 82 Q 54 80, 56 78 Q 54 76, 52 78"
              fill="#FF69B4"
              opacity="0.7"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
      {isSpeaking && (
        <>
          <div className="avatar-ripple absolute w-full h-full"></div>
          <div className="avatar-ripple absolute w-full h-full" style={{ animationDelay: '0.5s' }}></div>
          <div className="avatar-ripple absolute w-full h-full" style={{ animationDelay: '1s' }}></div>
        </>
      )}
      <div className="relative z-10">
        {renderAvatar()}
      </div>
    </div>
  );
}

