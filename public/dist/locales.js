
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This file is auto-generated. DO NOT EDIT THIS FILE. If you need to:
//   - change which locales are in this file, use the --locales option in
//     "build/all.py" or "build/build.py"
//   - change an entry for a specific locale, update "ui/locales/"
//   - change anything else, update "build/generateLocalizations.py".
//
// To regenerate this file, run "build/generateLocalizations.py".
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// LOCALES: ar, de, en, en-GB, es, es-419, fr, it, ja, ko, nl, pl, pt, ru, th, tr, zh, zh-TW
goog.provide('shaka.ui.Locales');
goog.require('shaka.ui.Localization');

/**
 * Insert all localization data for the UI into |localization|. This should be
 * done BEFORE any listeners are added to the localization system (to avoid
 * callbacks for each insert) and should be done BEFORE changing to the initial
 * preferred locale (reduces the work needed to update the internal state after
 * each insert).
 *
 * @param {!shaka.ui.Localization} localization
 */
shaka.ui.Locales.addTo = function(localization) {
  localization.insert('ar', new Map([
    ['AUTO_QUALITY', 'تلقائي'],
    ['BACK', 'رجوع'],
    ['CAPTIONS', 'الترجمة'],
    ['CAST', 'إرسال...'],
    ['ENTER_PICTURE_IN_PICTURE', 'الدخول في وضع "نافذة ضمن نافذة"'],
    ['EXIT_FULL_SCREEN', 'إنهاء وضع ملء الشاشة'],
    ['EXIT_PICTURE_IN_PICTURE', 'الخروج من وضع "نافذة ضمن نافذة"'],
    ['FAST_FORWARD', 'تقديم سريع'],
    ['FULL_SCREEN', 'ملء الشاشة'],
    ['LANGUAGE', 'اللغة'],
    ['LIVE', 'مباشر'],
    ['MORE_SETTINGS', 'إعدادات إضافية'],
    ['MUTE', 'كتم الصوت'],
    ['NOT_APPLICABLE', 'غير سارٍ'],
    ['OFF', 'إيقاف'],
    ['ON', 'تشغيل'],
    ['PAUSE', 'إيقاف مؤقت'],
    ['PICTURE_IN_PICTURE', 'نافذة ضمن النافذة'],
    ['PLAY', 'تشغيل'],
    ['RESOLUTION', ''],
    ['REWIND', 'إرجاع'],
    ['SEEK', 'شريط تمرير البحث'],
    ['SKIP_TO_LIVE', 'مباشر'],
    ['UNDETERMINED_LANGUAGE', 'غير معروفة'],
    ['UNMUTE', 'إلغاء كتم الصوت'],
    ['UNRECOGNIZED_LANGUAGE', 'غير معروفة'],
    ['VOLUME', 'الحجم'],
  ]));
  localization.insert('de', new Map([
    ['AUTO_QUALITY', 'Automatisch'],
    ['BACK', 'Zurück'],
    ['CAPTIONS', 'Untertitel'],
    ['CAST', 'Streamen…'],
    ['ENTER_PICTURE_IN_PICTURE', 'Bild-im-Bild-Modus aktivieren'],
    ['EXIT_FULL_SCREEN', 'Vollbildmodus beenden'],
    ['EXIT_PICTURE_IN_PICTURE', 'Bild-im-Bild-Modus beenden'],
    ['FAST_FORWARD', 'Vorspulen'],
    ['FULL_SCREEN', 'Vollbild'],
    ['LANGUAGE', 'Sprache'],
    ['LIVE', 'Live'],
    ['MORE_SETTINGS', 'Weitere Einstellungen'],
    ['MULTIPLE_LANGUAGES', 'mehrere Sprachen'],
    ['MUTE', 'Stummschalten'],
    ['NOT_APPLICABLE', 'Nicht zutreffend'],
    ['OFF', 'Aus'],
    ['ON', 'An'],
    ['PAUSE', 'Pausieren'],
    ['PICTURE_IN_PICTURE', 'Bild-in-Bild'],
    ['PLAY', 'Wiedergeben'],
    ['RESOLUTION', 'Auflösung'],
    ['REWIND', 'Zurückspulen'],
    ['SEEK', 'Schieberegler für Suche'],
    ['SKIP_TO_LIVE', 'Live'],
    ['UNDETERMINED_LANGUAGE', 'Unbestimmt'],
    ['UNMUTE', 'Stummschaltung aufheben'],
    ['UNRECOGNIZED_LANGUAGE', 'Unerkannt'],
    ['VOLUME', 'Lautstärke'],
  ]));
  localization.insert('en', new Map([
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Back'],
    ['CAPTIONS', 'Captions'],
    ['CAST', 'Cast...'],
    ['ENTER_PICTURE_IN_PICTURE', 'Enter Picture-in-Picture'],
    ['EXIT_FULL_SCREEN', 'Exit full screen'],
    ['EXIT_PICTURE_IN_PICTURE', 'Exit Picture-in-Picture'],
    ['FAST_FORWARD', 'Fast-forward'],
    ['FULL_SCREEN', 'Full screen'],
    ['LANGUAGE', 'Language'],
    ['LIVE', 'Live'],
    ['MORE_SETTINGS', 'More settings'],
    ['MULTIPLE_LANGUAGES', 'Multiple languages'],
    ['MUTE', 'Mute'],
    ['NOT_APPLICABLE', 'Not applicable'],
    ['OFF', 'Off'],
    ['ON', 'On'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Picture-in-Picture'],
    ['PLAY', 'Play'],
    ['RESOLUTION', 'Resolution'],
    ['REWIND', 'Rewind'],
    ['SEEK', 'Seek'],
    ['SKIP_TO_LIVE', 'Skip ahead to live'],
    ['UNDETERMINED_LANGUAGE', 'Undetermined'],
    ['UNMUTE', 'Unmute'],
    ['UNRECOGNIZED_LANGUAGE', 'Unrecognized'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('en-GB', new Map([
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Back'],
    ['CAPTIONS', 'Captions'],
    ['CAST', 'Cast...'],
    ['ENTER_PICTURE_IN_PICTURE', 'Enter Picture-in-Picture'],
    ['EXIT_FULL_SCREEN', 'Exit full screen'],
    ['EXIT_PICTURE_IN_PICTURE', 'Exit Picture-in-Picture'],
    ['FAST_FORWARD', 'Fast-forward'],
    ['FULL_SCREEN', 'Full screen'],
    ['LANGUAGE', 'Language'],
    ['LIVE', 'Live'],
    ['MORE_SETTINGS', 'More settings'],
    ['MULTIPLE_LANGUAGES', 'Multiple languages'],
    ['MUTE', 'Mute'],
    ['NOT_APPLICABLE', 'Not applicable'],
    ['OFF', 'Off'],
    ['ON', 'On'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Picture-in-Picture'],
    ['PLAY', 'Play'],
    ['RESOLUTION', 'Resolution'],
    ['REWIND', 'Rewind'],
    ['SEEK', 'Seek'],
    ['SKIP_TO_LIVE', 'Skip ahead to live'],
    ['UNDETERMINED_LANGUAGE', 'Undetermined'],
    ['UNMUTE', 'Unmute'],
    ['UNRECOGNIZED_LANGUAGE', 'Unrecognized'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('es', new Map([
    ['AUTO_QUALITY', 'Automática'],
    ['BACK', 'Atrás'],
    ['CAPTIONS', 'Subtítulos'],
    ['CAST', 'Reparto...'],
    ['ENTER_PICTURE_IN_PICTURE', 'abrir el modo imagen en imagen'],
    ['EXIT_FULL_SCREEN', 'Salir del modo de pantalla completa'],
    ['EXIT_PICTURE_IN_PICTURE', 'salir del modo imagen en imagen'],
    ['FAST_FORWARD', 'Avance rápido'],
    ['FULL_SCREEN', 'Pantalla completa'],
    ['LANGUAGE', 'Idioma'],
    ['LIVE', 'En directo'],
    ['MORE_SETTINGS', 'Más ajustes'],
    ['MULTIPLE_LANGUAGES', 'varios idiomas'],
    ['MUTE', 'Silenciar'],
    ['NOT_APPLICABLE', 'No aplicable'],
    ['OFF', 'No'],
    ['ON', 'activado'],
    ['PAUSE', 'Pausa'],
    ['PICTURE_IN_PICTURE', 'Imagen en imagen'],
    ['PLAY', 'Reproducir'],
    ['RESOLUTION', 'Resolución'],
    ['REWIND', 'Retroceder'],
    ['SEEK', 'Barra deslizante de búsqueda'],
    ['SKIP_TO_LIVE', 'En directo'],
    ['UNDETERMINED_LANGUAGE', 'Desconocido'],
    ['UNMUTE', 'Activar sonido'],
    ['UNRECOGNIZED_LANGUAGE', 'Desconocido'],
    ['VOLUME', 'volumen'],
  ]));
  localization.insert('es-419', new Map([
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Atrás'],
    ['CAPTIONS', 'Subtítulos'],
    ['CAST', 'Transmitir…'],
    ['ENTER_PICTURE_IN_PICTURE', 'ingresar al modo de pantalla en pantalla'],
    ['EXIT_FULL_SCREEN', 'Salir de pantalla completa'],
    ['EXIT_PICTURE_IN_PICTURE', 'salir del modo de pantalla en pantalla'],
    ['FAST_FORWARD', 'Avance rápido'],
    ['FULL_SCREEN', 'Pantalla completa'],
    ['LANGUAGE', 'Idioma'],
    ['LIVE', 'En vivo'],
    ['MORE_SETTINGS', 'Más opciones de configuración'],
    ['MUTE', 'Silenciar'],
    ['NOT_APPLICABLE', 'No aplicable'],
    ['OFF', 'Desactivado'],
    ['ON', 'activado'],
    ['PAUSE', 'Detener'],
    ['PICTURE_IN_PICTURE', 'Pantalla en pantalla'],
    ['PLAY', 'Jugar'],
    ['RESOLUTION', 'Resolución'],
    ['REWIND', 'Retroceder'],
    ['SEEK', 'Barra deslizante de búsqueda'],
    ['SKIP_TO_LIVE', 'En vivo'],
    ['UNDETERMINED_LANGUAGE', 'Desconocido'],
    ['UNMUTE', 'Activar sonido'],
    ['UNRECOGNIZED_LANGUAGE', 'Desconocido'],
    ['VOLUME', 'volumen'],
  ]));
  localization.insert('fr', new Map([
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Retour'],
    ['CAPTIONS', 'Sous-titres'],
    ['CAST', 'Caster sur…'],
    ['ENTER_PICTURE_IN_PICTURE', 'utiliser le mode PIP'],
    ['EXIT_FULL_SCREEN', 'Quitter le mode plein écran'],
    ['EXIT_PICTURE_IN_PICTURE', 'quitter le mode PIP'],
    ['FAST_FORWARD', 'Avance rapide'],
    ['FULL_SCREEN', 'Plein écran'],
    ['LANGUAGE', 'Langue'],
    ['LIVE', 'En direct'],
    ['MORE_SETTINGS', 'Autres paramètres'],
    ['MULTIPLE_LANGUAGES', 'plusieurs langues'],
    ['MUTE', 'Désactiver le son'],
    ['NOT_APPLICABLE', 'Non applicable'],
    ['OFF', 'Désactivée'],
    ['ON', 'activé'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Picture-in-picture'],
    ['PLAY', 'Lire'],
    ['RESOLUTION', 'Résolution'],
    ['REWIND', 'Retour arrière'],
    ['SEEK', 'Barre de recherche'],
    ['SKIP_TO_LIVE', 'Aller au direct'],
    ['UNDETERMINED_LANGUAGE', 'Inconnue'],
    ['UNMUTE', 'Activer le son'],
    ['UNRECOGNIZED_LANGUAGE', 'Inconnue'],
    ['VOLUME', 'volume'],
  ]));
  localization.insert('it', new Map([
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Indietro'],
    ['CAPTIONS', 'Sottotitoli'],
    ['CAST', 'Trasmetti…'],
    ['ENTER_PICTURE_IN_PICTURE', 'attiva picture in picture'],
    ['EXIT_FULL_SCREEN', 'Esci dalla modalità a schermo intero'],
    ['EXIT_PICTURE_IN_PICTURE', 'esci da picture in picture'],
    ['FAST_FORWARD', 'Avanti veloce'],
    ['FULL_SCREEN', 'Schermo intero'],
    ['LANGUAGE', 'Lingua'],
    ['LIVE', 'Dal vivo'],
    ['MORE_SETTINGS', 'Altre impostazioni'],
    ['MUTE', 'Disattiva audio'],
    ['NOT_APPLICABLE', 'Non applicable'],
    ['OFF', 'Disattivato'],
    ['ON', 'on'],
    ['PAUSE', 'Metti in pausa'],
    ['PICTURE_IN_PICTURE', 'Picture in picture'],
    ['PLAY', 'Riproduci'],
    ['RESOLUTION', 'Risoluzione'],
    ['REWIND', 'Riavvolgi'],
    ['SEEK', 'Dispositivo di scorrimento'],
    ['SKIP_TO_LIVE', 'Dal vivo'],
    ['UNDETERMINED_LANGUAGE', 'Sconosciuto'],
    ['UNMUTE', 'Riattiva audio'],
    ['UNRECOGNIZED_LANGUAGE', 'Sconosciuto'],
    ['VOLUME', 'volume'],
  ]));
  localization.insert('ja', new Map([
    ['AUTO_QUALITY', '自動'],
    ['BACK', '戻る'],
    ['CAPTIONS', '字幕'],
    ['CAST', 'キャスト...'],
    ['ENTER_PICTURE_IN_PICTURE', 'ピクチャー イン ピクチャーを開始します'],
    ['EXIT_FULL_SCREEN', '全画面モードの終了'],
    ['EXIT_PICTURE_IN_PICTURE', 'ピクチャー イン ピクチャーを終了します'],
    ['FAST_FORWARD', '早送り'],
    ['FULL_SCREEN', '全画面'],
    ['LANGUAGE', '言語'],
    ['LIVE', 'ライブ'],
    ['MORE_SETTINGS', 'その他の設定'],
    ['MULTIPLE_LANGUAGES', '複数の言語'],
    ['MUTE', 'ミュート'],
    ['NOT_APPLICABLE', '--'],
    ['OFF', 'オフ'],
    ['ON', 'オン'],
    ['PAUSE', '一時停止'],
    ['PICTURE_IN_PICTURE', 'ピクチャー イン ピクチャー'],
    ['PLAY', '再生'],
    ['RESOLUTION', '解像度'],
    ['REWIND', '巻き戻し'],
    ['SEEK', 'シーク バー'],
    ['SKIP_TO_LIVE', 'ライブ'],
    ['UNDETERMINED_LANGUAGE', '不明'],
    ['UNMUTE', 'ミュート解除'],
    ['UNRECOGNIZED_LANGUAGE', '不明'],
    ['VOLUME', '音量'],
  ]));
  localization.insert('ko', new Map([
    ['AUTO_QUALITY', '자동'],
    ['BACK', '뒤로'],
    ['CAPTIONS', '자막'],
    ['CAST', '전송...'],
    ['ENTER_PICTURE_IN_PICTURE', 'PIP 모드 시작'],
    ['EXIT_FULL_SCREEN', '전체화면 종료'],
    ['EXIT_PICTURE_IN_PICTURE', 'PIP 모드 종료'],
    ['FAST_FORWARD', '빨리감기'],
    ['FULL_SCREEN', '전체화면'],
    ['LANGUAGE', '언어'],
    ['LIVE', '라이브'],
    ['MORE_SETTINGS', '설정 더보기'],
    ['MULTIPLE_LANGUAGES', '여러 언어'],
    ['MUTE', '음소거'],
    ['NOT_APPLICABLE', '해당 사항 없음'],
    ['OFF', '사용 안함'],
    ['ON', '사용'],
    ['PAUSE', '일시중지'],
    ['PICTURE_IN_PICTURE', 'PIP 모드'],
    ['PLAY', '재생'],
    ['RESOLUTION', '해상도'],
    ['REWIND', '되감기'],
    ['SEEK', '탐색 슬라이더'],
    ['SKIP_TO_LIVE', '라이브'],
    ['UNDETERMINED_LANGUAGE', '알 수 없음'],
    ['UNMUTE', '음소거 해제'],
    ['UNRECOGNIZED_LANGUAGE', '알 수 없음'],
    ['VOLUME', '볼륨'],
  ]));
  localization.insert('nl', new Map([
    ['AUTO_QUALITY', 'Automatisch'],
    ['BACK', 'Terug'],
    ['CAPTIONS', 'Ondertiteling'],
    ['CAST', 'Casten...'],
    ['ENTER_PICTURE_IN_PICTURE', 'scherm-in-scherm openen'],
    ['EXIT_FULL_SCREEN', 'Volledig scherm afsluiten'],
    ['EXIT_PICTURE_IN_PICTURE', 'scherm-in-scherm afsluiten'],
    ['FAST_FORWARD', 'Vooruitspoelen'],
    ['FULL_SCREEN', 'Volledig scherm'],
    ['LANGUAGE', 'Taal'],
    ['LIVE', 'Live'],
    ['MORE_SETTINGS', 'Meer instellingen'],
    ['MUTE', 'Dempen'],
    ['NOT_APPLICABLE', 'Niet van toepassing'],
    ['OFF', 'Uit'],
    ['ON', 'aan'],
    ['PAUSE', 'Onderbreken'],
    ['PICTURE_IN_PICTURE', 'Scherm-in-scherm'],
    ['PLAY', 'Afspelen'],
    ['RESOLUTION', 'Resolutie'],
    ['REWIND', 'Terugspoelen'],
    ['SEEK', 'Zoekschuifbalk'],
    ['SKIP_TO_LIVE', 'Live'],
    ['UNDETERMINED_LANGUAGE', 'Onbekend'],
    ['UNMUTE', 'Dempen opheffen'],
    ['UNRECOGNIZED_LANGUAGE', 'Onbekend'],
    ['VOLUME', 'volume'],
  ]));
  localization.insert('pl', new Map([
    ['AUTO_QUALITY', 'Automatyczna'],
    ['BACK', 'Wstecz'],
    ['CAPTIONS', 'Napisy'],
    ['CAST', 'Prześlij...'],
    ['ENTER_PICTURE_IN_PICTURE', 'włącz tryb obrazu w obrazie'],
    ['EXIT_FULL_SCREEN', 'Zamknij pełny ekran'],
    ['EXIT_PICTURE_IN_PICTURE', 'wyłącz tryb obrazu w obrazie'],
    ['FAST_FORWARD', 'Przewiń do przodu'],
    ['FULL_SCREEN', 'Pełny ekran'],
    ['LANGUAGE', 'Język'],
    ['LIVE', 'Na żywo'],
    ['MORE_SETTINGS', 'Więcej ustawień'],
    ['MUTE', 'Wycisz'],
    ['NOT_APPLICABLE', 'Nie dotyczy'],
    ['OFF', 'Wyłączone'],
    ['ON', 'wł.'],
    ['PAUSE', 'Wstrzymaj'],
    ['PICTURE_IN_PICTURE', 'Obraz w obrazie'],
    ['PLAY', 'Odtwarzaj'],
    ['RESOLUTION', 'Rozdzielczość'],
    ['REWIND', 'Przewiń do tyłu'],
    ['SEEK', 'Suwak przewijania'],
    ['SKIP_TO_LIVE', 'Na żywo'],
    ['UNDETERMINED_LANGUAGE', 'Nieznane'],
    ['UNMUTE', 'Wyłącz wyciszenie'],
    ['UNRECOGNIZED_LANGUAGE', 'Nieznane'],
    ['VOLUME', 'głośność'],
  ]));
  localization.insert('pt', new Map([
    ['AUTO_QUALITY', 'Automático'],
    ['BACK', 'Voltar'],
    ['CAPTIONS', 'Legendas ocultas'],
    ['CAST', 'Elenco...'],
    ['ENTER_PICTURE_IN_PICTURE', 'entrar no modo picture-in-picture'],
    ['EXIT_FULL_SCREEN', 'Sair da tela inteira'],
    ['EXIT_PICTURE_IN_PICTURE', 'sair de picture-in-picture'],
    ['FAST_FORWARD', 'Avançar'],
    ['FULL_SCREEN', 'Tela inteira'],
    ['LANGUAGE', 'Idioma'],
    ['LIVE', 'Ao vivo'],
    ['MORE_SETTINGS', 'Mais configurações'],
    ['MULTIPLE_LANGUAGES', 'vários idiomas'],
    ['MUTE', 'Desativar som'],
    ['NOT_APPLICABLE', 'Não aplicável'],
    ['OFF', 'Desativado'],
    ['ON', 'ativado'],
    ['PAUSE', 'Pausar'],
    ['PICTURE_IN_PICTURE', 'Picture-in-picture'],
    ['PLAY', 'Reproduzir'],
    ['RESOLUTION', 'Resolução'],
    ['REWIND', 'Retroceder'],
    ['SEEK', 'Botão deslizante de busca'],
    ['SKIP_TO_LIVE', 'Ao vivo'],
    ['UNDETERMINED_LANGUAGE', 'Desconhecido'],
    ['UNMUTE', 'Ativar som'],
    ['UNRECOGNIZED_LANGUAGE', 'Desconhecido'],
    ['VOLUME', 'volume'],
  ]));
  localization.insert('ru', new Map([
    ['AUTO_QUALITY', 'Автонастройка'],
    ['BACK', 'Назад'],
    ['CAPTIONS', 'Субтитры'],
    ['CAST', 'Хромкаст'],
    ['ENTER_PICTURE_IN_PICTURE', 'включить режим "Картинка в картинке"'],
    ['EXIT_FULL_SCREEN', 'Выход из полноэкранного режима'],
    ['EXIT_PICTURE_IN_PICTURE', 'выйти из режима "Картинка в картинке"'],
    ['FAST_FORWARD', 'Перемотать вперед'],
    ['FULL_SCREEN', 'Во весь экран'],
    ['LANGUAGE', 'Язык'],
    ['LIVE', 'Прямой эфир'],
    ['MORE_SETTINGS', 'Дополнительные настройки'],
    ['MULTIPLE_LANGUAGES', 'поддержка нескольких языков'],
    ['MUTE', 'Отключить звук'],
    ['NOT_APPLICABLE', 'Неприменимо'],
    ['OFF', 'Выкл.'],
    ['ON', 'ВКЛ'],
    ['PAUSE', 'Приостановить'],
    ['PICTURE_IN_PICTURE', 'Картинка в картинке'],
    ['PLAY', 'Смотреть'],
    ['RESOLUTION', 'Разрешение'],
    ['REWIND', 'Перемотать назад'],
    ['SEEK', 'Ползунок поиска'],
    ['SKIP_TO_LIVE', 'Смотреть прямой эфир'],
    ['UNDETERMINED_LANGUAGE', 'Неизвестно'],
    ['UNMUTE', 'Включить звук'],
    ['UNRECOGNIZED_LANGUAGE', 'Неизвестно'],
    ['VOLUME', 'громкость'],
  ]));
  localization.insert('th', new Map([
    ['AUTO_QUALITY', 'อัตโนมัติ'],
    ['BACK', 'กลับ'],
    ['CAPTIONS', 'คำอธิบายวิดีโอ'],
    ['CAST', 'แคสต์...'],
    ['ENTER_PICTURE_IN_PICTURE', 'เข้าสู่การแสดงภาพซ้อนภาพ'],
    ['EXIT_FULL_SCREEN', 'ออกจากโหมดเต็มหน้าจอ'],
    ['EXIT_PICTURE_IN_PICTURE', 'ออกจากการแสดงภาพซ้อนภาพ'],
    ['FAST_FORWARD', 'กรอไปข้างหน้า'],
    ['FULL_SCREEN', 'เต็มหน้าจอ'],
    ['LANGUAGE', 'ภาษา'],
    ['LIVE', 'สด'],
    ['MORE_SETTINGS', 'การตั้งค่าเพิ่มเติม'],
    ['MUTE', 'ปิดเสียง'],
    ['NOT_APPLICABLE', 'ไม่เกี่ยวข้อง'],
    ['OFF', 'ปิด'],
    ['ON', 'เปิด'],
    ['PAUSE', 'หยุดชั่วคราว'],
    ['PICTURE_IN_PICTURE', 'การแสดงภาพซ้อนภาพ'],
    ['PLAY', 'เล่น'],
    ['RESOLUTION', 'ความละเอียด'],
    ['REWIND', 'กรอกลับ'],
    ['SEEK', 'แถบเลื่อนค้นหา'],
    ['SKIP_TO_LIVE', 'สด'],
    ['UNDETERMINED_LANGUAGE', 'ไม่ทราบ'],
    ['UNMUTE', 'เปิดเสียง'],
    ['UNRECOGNIZED_LANGUAGE', 'ไม่ทราบ'],
    ['VOLUME', 'ระดับเสียง'],
  ]));
  localization.insert('tr', new Map([
    ['AUTO_QUALITY', 'Otomatik'],
    ['BACK', 'Geri'],
    ['CAPTIONS', 'Altyazılar'],
    ['CAST', 'Yayınla...'],
    ['ENTER_PICTURE_IN_PICTURE', 'pencere içinde pencere moduna gir'],
    ['EXIT_FULL_SCREEN', 'Tam ekrandan çık'],
    ['EXIT_PICTURE_IN_PICTURE', 'pencere içinde pencere modundan çıkın'],
    ['FAST_FORWARD', 'İleri sar'],
    ['FULL_SCREEN', 'Tam ekran'],
    ['LANGUAGE', 'Dil'],
    ['LIVE', 'Canlı'],
    ['MORE_SETTINGS', 'Diğer ayarlar'],
    ['MUTE', 'Sesi kapat'],
    ['NOT_APPLICABLE', 'Kullanılmıyor'],
    ['OFF', 'Kapalı'],
    ['ON', 'açık'],
    ['PAUSE', 'Duraklat'],
    ['PICTURE_IN_PICTURE', 'Pencere içinde Pencere'],
    ['PLAY', 'Oynat'],
    ['RESOLUTION', 'Çözünürlük'],
    ['REWIND', 'Geri sar'],
    ['SEEK', 'Arama kaydırma çubuğu'],
    ['SKIP_TO_LIVE', 'Canlı'],
    ['UNDETERMINED_LANGUAGE', 'Bilinmiyor'],
    ['UNMUTE', 'Sesi aç'],
    ['UNRECOGNIZED_LANGUAGE', 'Bilinmiyor'],
    ['VOLUME', 'ses düzeyi'],
  ]));
  localization.insert('zh', new Map([
    ['AUTO_QUALITY', '自动'],
    ['BACK', '返回'],
    ['CAPTIONS', '字幕'],
    ['CAST', '投射…'],
    ['ENTER_PICTURE_IN_PICTURE', '进入“画中画”模式'],
    ['EXIT_FULL_SCREEN', '退出全屏'],
    ['EXIT_PICTURE_IN_PICTURE', '退出“画中画”模式'],
    ['FAST_FORWARD', '快进'],
    ['FULL_SCREEN', '全屏'],
    ['LANGUAGE', '语言'],
    ['LIVE', '直播'],
    ['MORE_SETTINGS', '更多设置'],
    ['MUTE', '静音'],
    ['NOT_APPLICABLE', '不適用'],
    ['OFF', '关闭'],
    ['ON', '开启'],
    ['PAUSE', '暂停'],
    ['PICTURE_IN_PICTURE', '画中画'],
    ['PLAY', '播放'],
    ['RESOLUTION', '分辨率'],
    ['REWIND', '快退'],
    ['SEEK', '播放滑块'],
    ['SKIP_TO_LIVE', '直播'],
    ['UNDETERMINED_LANGUAGE', '未知'],
    ['UNMUTE', '取消静音'],
    ['UNRECOGNIZED_LANGUAGE', '未知'],
    ['VOLUME', '音量'],
  ]));
  localization.insert('zh-TW', new Map([
    ['AUTO_QUALITY', '自動'],
    ['BACK', '返回'],
    ['CAPTIONS', '字幕'],
    ['CAST', '投放…'],
    ['ENTER_PICTURE_IN_PICTURE', '進入子母畫面'],
    ['EXIT_FULL_SCREEN', '結束全螢幕'],
    ['EXIT_PICTURE_IN_PICTURE', '離開子母畫面'],
    ['FAST_FORWARD', '快轉'],
    ['FULL_SCREEN', '全螢幕'],
    ['LANGUAGE', '語言'],
    ['LIVE', '直播'],
    ['MORE_SETTINGS', '更多設定'],
    ['MUTE', '靜音'],
    ['NOT_APPLICABLE', '不適用'],
    ['OFF', '關閉'],
    ['ON', '開啟'],
    ['PAUSE', '暫停'],
    ['PICTURE_IN_PICTURE', '子母畫面'],
    ['PLAY', '播放'],
    ['RESOLUTION', '解析度'],
    ['REWIND', '倒轉'],
    ['SEEK', '搜尋滑桿'],
    ['SKIP_TO_LIVE', '直播'],
    ['UNDETERMINED_LANGUAGE', '未知'],
    ['UNMUTE', '解除靜音'],
    ['UNRECOGNIZED_LANGUAGE', '未知'],
    ['VOLUME', '音量'],
  ]));
};

/**
 * @enum {string}
 * @const
 */
shaka.ui.Locales.Ids = {
  ON: 'ON',
  REWIND: 'REWIND',
  SEEK: 'SEEK',
  FULL_SCREEN: 'FULL_SCREEN',
  LIVE: 'LIVE',
  OFF: 'OFF',
  CAPTIONS: 'CAPTIONS',
  MUTE: 'MUTE',
  PAUSE: 'PAUSE',
  PLAY: 'PLAY',
  ENTER_PICTURE_IN_PICTURE: 'ENTER_PICTURE_IN_PICTURE',
  MULTIPLE_LANGUAGES: 'MULTIPLE_LANGUAGES',
  PICTURE_IN_PICTURE: 'PICTURE_IN_PICTURE',
  LANGUAGE: 'LANGUAGE',
  BACK: 'BACK',
  UNRECOGNIZED_LANGUAGE: 'UNRECOGNIZED_LANGUAGE',
  UNMUTE: 'UNMUTE',
  MORE_SETTINGS: 'MORE_SETTINGS',
  UNDETERMINED_LANGUAGE: 'UNDETERMINED_LANGUAGE',
  EXIT_PICTURE_IN_PICTURE: 'EXIT_PICTURE_IN_PICTURE',
  RESOLUTION: 'RESOLUTION',
  EXIT_FULL_SCREEN: 'EXIT_FULL_SCREEN',
  SKIP_TO_LIVE: 'SKIP_TO_LIVE',
  FAST_FORWARD: 'FAST_FORWARD',
  CAST: 'CAST',
  AUTO_QUALITY: 'AUTO_QUALITY',
  VOLUME: 'VOLUME',
  NOT_APPLICABLE: 'NOT_APPLICABLE',
};
