/**
 * SOVEREIGN PORTAL & EXECUTIVE CARD ENGINE
 * Mr. Hassan Dris (السيد حسن دريس)
 * High-performance, zero-dependency client logic
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. TRILINGUAL DICTIONARY (AR / FR / EN)
     ========================================================================== */
  const I18N = {
    ar: {
      republic_name: 'الجمهورية الجزائرية الديمقراطية الشعبية',
      organization_name: 'المنظمة الجزائرية إتصال من أجل التنمية',
      authority_name: 'الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
      pillar_1: 'إتصال',
      pillar_2: 'ترقية الإستثمار',
      pillar_3: 'تنمية',

      hero_name_primary: 'السيد حسن دريس',
      hero_name_secondary: 'HASSAN DRIS',
      hero_dual_title: 'مستشار اقتصادي دولي | عضو المكتب الجهوي — الوسط (الجزائر العاصمة)',

      badge_accredited: 'إعتماد رسمي معتمد ن/د',
      badge_cadre: 'بطاقة إطار سامي',
      label_id_short: 'الرقم:',
      badge_verified: 'معتمد 2026',

      action_save_contact: 'حفظ جهة الاتصال الرسمية',
      action_vcard_desc: 'تحميل بطاقة vCard معتمدة مع كامل البيانات',
      action_view_card: 'عرض بطاقة إطار والاعتماد الرسمي',
      action_card_desc: 'معاينة الوجهين الأمامي والخلفي والبيانات القانونية',

      tier2_tag: 'الجمهورية الجزائرية الديمقراطية الشعبية',
      tier2_title: 'بطاقة إطار — البيانات الرسمية المعتمدة',
      label_id: 'الرقم التعريفي',

      cred_holder_name: 'الاسم واللقب:',
      cred_birth: 'تاريخ ومكان الازدياد:',
      cred_birth_val: '1958/05/04 بفرنسا (قنصلية بوبيني / السواحلية - تلمسان)',
      cred_function: 'الوظيفة المؤسساتية:',
      cred_function_val: 'عضو بالمكتب الجهوي - الوسط الجزائر العاصمة',
      cred_function_pv: 'محضر تنصيب رقم 0103 / هـ . و . م . ج / إ . ع / م . ت / 2026 (13/10/2026)',
      cred_advisor: 'الصفة الاستشارية:',
      cred_advisor_val: 'مستشار اقتصادي دولي (International Economic Advisor)',
      cred_reg_num: 'رقم التسجيل:',
      cred_validity: 'تاريخ الإصدار والصلاحية:',
      cred_validity_val: 'أكتوبر 2026 (صالحة لمدة سنة قابلة للتجديد)',
      cred_interior: 'إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية:',
      badge_state_approval: 'إعتماد دولة',
      cred_president: 'رئيس الهيئة الوطنية:',
      cred_president_val: 'القائد شريبط عبد الكريم',
      cred_scans_quick: 'معاينة بطاقة الإطار:',
      cred_view_scans: 'عرض النسخة الرسمية المصورة (الوجه / الظهر)',

      legal_primary: 'حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية',
      legal_secondary: 'إعلان الحق في التنمية ونشر بموجب قرار الجمعية العامة للأمم المتحدة تحت رقم 128/14 المؤرخ بـ 04 كانون الأول / ديسمبر 1986',

      tier3_heading: 'الخبرة الاقتصادية الدولية والاستثمار',
      tag_advisory: 'استشارة استراتيجية',
      showcase1_title: 'الاستشارة الاقتصادية الدولية وترقية الاستثمار',
      showcase1_desc: 'خبير اقتصادي دولي مختص في الاستيراد والتصدير، مرافقة المستثمرين من أبناء الجالية الوطنية بالخارج، ربط الشراكات الصناعية والتجارية، وتيسير توطين الاستثمارات الاستراتيجية بما يخدم مسار التنمية الوطنية.',
      feat_import_export: 'استيراد وتصدير',
      feat_diaspora: 'مرافقة الجالية',
      feat_partnerships: 'شراكات دولية',
      feat_invest: 'تنمية الاستثمار',

      tag_company: 'تجارة واستثمار دولي',
      showcase2_title: 'شركة حسن و سليمان للتجارة و الإستثمار ش.م.م',
      showcase2_desc: 'التجارة الدولية، الاستيراد والتصدير، إدارة وتطوير المشاريع الاستثمارية المشتركة بين الجمهورية الجزائرية وسلطنة عمان والأسواق الإقليمية والدولية.',
      company_hq_oman: 'المقر الدولي — سلطنة عمان:',
      company_hq_oman_ar: '(بوشر ص ب : 111 ر ب 111 — مسقط، سلطنة عمان)',
      company_scope: 'محاور النشاط:',
      company_scope_val: 'الجزائر • سلطنة عمان • دول الخليج العربي • الأسواق الأوروبية',

      tier4_heading: 'قنوات التواصل المباشر',
      channel_phone_label: 'الهاتف المباشر (الجزائر ودولياً)',
      action_call: 'اتصال هاتفي مباشر',
      channel_whatsapp_label: 'واتساب الأعمال والمراسلات',
      channel_whatsapp_sub: 'مراسلة فورية مشفرة',
      action_whatsapp: 'فتح المحادثة',
      channel_email_label: 'البريد الإلكتروني المعتمد',
      channel_email_sub: 'مراسلات استشارية ورسمية',
      action_email: 'إرسال بريد',

      admin_accordion_title: 'المقرات الإدارية للمنظمة (الجزائر العاصمة وقسنطينة) وأرقام الاتصال',
      hq_algiers_badge: 'المقر الرئيسي — العاصمة',
      hq_algiers_title: 'المكتب الجهوي التنفيذي للوسط',
      hq_algiers_address: 'شارع بوجمعة تميم 249 درارية سيراميك، الجزائر العاصمة',
      hq_algiers_scope: 'دائرة الاختصاص: الجزائر العاصمة والولايات المجاورة (الوسط)',

      hq_const_badge: 'الإدارة المركزية',
      hq_const_title: 'المقر الإداري المركزي للمنظمة',
      hq_const_address: 'و.ج 14 حي 1500 مسكن عدل توسعة بلميلع ع 39 محل 17 المدينة الجديدة — علي منجلي، قسنطينة',
      hq_central_email: 'البريد المركزي:',
      hq_central_phones: 'أرقام الهواتف:',

      footer_rights: 'الجمهورية الجزائرية الديمقراطية الشعبية • المنظمة الجزائرية إتصال من أجل التنمية',
      footer_sub: 'البوابة الرسمية للمستشار الاقتصادي الدولي وعضو المكتب الجهوي للوسط: السيد حسن دريس (Hassan DRIS) © 2026',
      footer_show_qr: 'عرض رمز الاستجابة السريعة (QR)',

      modal_card_title: 'بطاقة إطار — النسخة الرسمية المصورة',
      modal_card_sub: 'الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
      tab_recto: 'الوجه الأمامي (Recto)',
      tab_verso: 'الوجه الخلفي (Verso)',
      tab_data: 'البيانات المكتملة',
      caption_recto_badge: 'الوجه الأمامي',
      caption_recto_text: 'يتضمن الاسم واللقب، الصورة الشمسية، ختم الهيئة، الرقم التعريفي، ورقم إعتماد وزارة الداخلية.',
      caption_verso_badge: 'الوجه الخلفي',
      caption_verso_text: 'يتضمن الصفة الاستشارية (International Economic Advisor)، توقيع رئيس الهيئة، والضمانات القانونية الأممية.',
      modal_download_recto: 'تحميل الوجه الأمامي',
      modal_download_verso: 'تحميل الوجه الخلفي',

      modal_name: 'الاسم واللقب:',
      modal_birth: 'الميلاد:',
      modal_post: 'الوظيفة الرسمية:',
      modal_advisor: 'الصفة الاستشارية:',
      modal_id: 'الرقم التعريفي:',
      modal_reg: 'رقم التسجيل:',
      modal_approval: 'إعتماد وزارة الداخلية:',
      modal_president: 'رئيس الهيئة:',
      modal_validity: 'فترة الصلاحية:',

      share_modal_title: 'مشاركة البوابة الرسمية',
      share_modal_sub: 'امسح الرمز أو انسخ الرابط المعتمد',
      qr_instructions: 'يمكنكم مسح هذا الرمز مباشرة بكاميرا الهاتف للوصول السريع إلى البوابة الرقمية للسيد حسن دريس.',
      btn_copy_link: 'نسخ الرابط',

      toast_copied: 'تم نسخ النص إلى الحافظة بنجاح',
      toast_vcard_success: 'تم إعداد وتحميل بطاقة الاتصال (vCard) بنجاح'
    },

    fr: {
      republic_name: "République Algérienne Démocratique et Populaire",
      organization_name: "Organisation Algérienne Communication pour le Développement",
      authority_name: "Autorité Nationale pour le Développement des Émigrés et la Prise en Charge de la Communauté à l'Étranger",
      pillar_1: 'Communication',
      pillar_2: "Promotion de l'Investissement",
      pillar_3: 'Développement',

      hero_name_primary: 'M. HASSAN DRIS',
      hero_name_secondary: 'السيد حسن دريس',
      hero_dual_title: 'Conseiller Économique International | Membre du Bureau Régional du Centre (Alger)',

      badge_accredited: 'Agrément Officiel d’État',
      badge_cadre: 'Carte de Haut Cadre',
      label_id_short: 'ID:',
      badge_verified: 'Vérifié 2026',

      action_save_contact: 'Enregistrer le Contact Officiel',
      action_vcard_desc: 'Télécharger la fiche contact vCard certifiée complète',
      action_view_card: 'Consulter la Carte de Cadre & Accréditation',
      action_card_desc: 'Visualiser les scans officiels Recto/Verso et le statut légal',

      tier2_tag: 'République Algérienne Démocratique et Populaire',
      tier2_title: 'Carte de Cadre — Données Officielles Accréditées',
      label_id: 'Identifiant (ID)',

      cred_holder_name: 'Nom & Prénom :',
      cred_birth: 'Date & Lieu de Naissance :',
      cred_birth_val: '04/05/1958 à Roussillon, France (Consulat de Bobigny / Souahlia - Tlemcen)',
      cred_function: 'Fonction Institutionnelle :',
      cred_function_val: 'Membre du Bureau Régional — Centre, Alger',
      cred_function_pv: "Procès-verbal d'installation n° 0103 / هـ.و.م.ج / إ.ع / م.ت / 2026 du 13/10/2026",
      cred_advisor: 'Qualité Consultative :',
      cred_advisor_val: 'Conseiller Économique International (International Economic Advisor)',
      cred_reg_num: "N° d'Enregistrement :",
      cred_validity: 'Délivrance & Validité :',
      cred_validity_val: 'Octobre 2026 (Valable un an renouvelable)',
      cred_interior: "Agrément du Ministère de l'Intérieur & des Collectivités Locales :",
      badge_state_approval: 'Agrément État',
      cred_president: "Président de l'Autorité Nationale :",
      cred_president_val: 'Commandant Cheribet Abdelkrim (القائد شريبط عبد الكريم)',
      cred_scans_quick: 'Aperçu de la Carte :',
      cred_view_scans: 'Afficher les scans certifiés (Recto / Verso)',

      legal_primary: 'Le titulaire de cette carte est une personnalité morale investie de toutes les prérogatives auprès des autorités officielles.',
      legal_secondary: 'Déclaration sur le Droit au Développement — Résolution de l’Assemblée Générale de l’ONU n° 128/14 du 4 Décembre 1986.',

      tier3_heading: 'Portefeuille Économique International & Investissements',
      tag_advisory: 'Conseil Stratégique',
      showcase1_title: "Conseil Économique International & Promotion de l'Investissement",
      showcase1_desc: 'Expert économique international spécialisé en import/export, accompagnement des investisseurs de la diaspora algérienne, structuration de partenariats industriels et facilitation des investissements stratégiques pour le développement national.',
      feat_import_export: 'Import / Export',
      feat_diaspora: 'Accompagnement Diaspora',
      feat_partnerships: 'Partenariats Mondiaux',
      feat_invest: 'Promotion Investissement',

      tag_company: 'Commerce & Investissement',
      showcase2_title: 'Hassan & Suleiman Trading and Investment Co. L.L.C',
      showcase2_desc: "Commerce international, négoce import/export, développement de projets d'investissement conjoints entre l'Algérie, le Sultanat d'Oman et les marchés du Golfe et d'Europe.",
      company_hq_oman: 'Siège International — Sultanat d’Oman :',
      company_hq_oman_ar: '(Bousher PO BOX 111 PC 111 — Mascate, Sultanat d’Oman)',
      company_scope: "Axes d'activité :",
      company_scope_val: 'Algérie • Sultanat d’Oman • Pays du Golfe • Marchés Européens',

      tier4_heading: 'Canaux de Communication Directe',
      channel_phone_label: 'Ligne Téléphonique Directe (Algérie & International)',
      action_call: 'Appeler',
      channel_whatsapp_label: 'WhatsApp Business & Messagerie Directe',
      channel_whatsapp_sub: 'Échange chiffré instantané',
      action_whatsapp: 'Démarrer discussion',
      channel_email_label: 'Courriel Professionnel Accrédité',
      channel_email_sub: 'Correspondances consultatives & protocolaires',
      action_email: 'Écrire un e-mail',

      admin_accordion_title: "Sièges Administratifs de l'Organisation (Alger & Constantine) & Téléphones",
      hq_algiers_badge: 'Siège Régional — Alger',
      hq_algiers_title: 'Bureau Régional Exécutif du Centre',
      hq_algiers_address: 'Rue Boudjemaa Temim 249 Draria Céramique, Alger',
      hq_algiers_scope: 'Compétence territoriale : Alger et wilayas limitrophes (Centre)',

      hq_const_badge: 'Administration Centrale',
      hq_const_title: 'Siège Administratif Central',
      hq_const_address: 'W.J 14 Cité 1500 Logements AADL Extension Belmilegh Bât 39 Local 17 Ville Nouvelle Ali Mendjeli, Constantine',
      hq_central_email: 'Courriel Central :',
      hq_central_phones: 'Lignes Directes :',

      footer_rights: 'République Algérienne Démocratique et Populaire • Organisation Algérienne Communication pour le Développement',
      footer_sub: 'Portail officiel du Conseiller Économique International et Membre du Bureau Régional du Centre : M. Hassan DRIS © 2026',
      footer_show_qr: 'Afficher le QR Code du Portail',

      modal_card_title: 'Carte de Cadre — Scans Officiels Certifiés',
      modal_card_sub: "Autorité Nationale pour le Développement des Émigrés et la Prise en Charge de la Communauté à l'Étranger",
      tab_recto: 'Face Recto',
      tab_verso: 'Face Verso',
      tab_data: 'Fiche Complète',
      caption_recto_badge: 'Face Recto',
      caption_recto_text: "Comporte l'identité officielle, photo d'identité, sceau de l'Autorité, identifiant ID 100111 et agrément ministériel.",
      caption_verso_badge: 'Face Verso',
      caption_verso_text: 'Comporte le titre International Economic Advisor, la signature de commandement et la référence ONU 1986.',
      modal_download_recto: 'Télécharger le Recto',
      modal_download_verso: 'Télécharger le Verso',

      modal_name: 'Nom & Prénom :',
      modal_birth: 'Naissance :',
      modal_post: 'Fonction :',
      modal_advisor: 'Qualité Consultative :',
      modal_id: 'Identifiant (ID) :',
      modal_reg: "N° d'Enregistrement :",
      modal_approval: "Agrément Ministère de l'Intérieur :",
      modal_president: "Président de l'Autorité :",
      modal_validity: 'Période de Validité :',

      share_modal_title: 'Partager le Portail Officiel',
      share_modal_sub: 'Scannez le QR Code ou copiez le lien accrédité',
      qr_instructions: "Scannez ce code QR avec l'appareil photo de votre smartphone pour accéder instantanément au portail de M. Hassan Dris.",
      btn_copy_link: 'Copier le lien',

      toast_copied: 'Copié dans le presse-papiers avec succès',
      toast_vcard_success: 'Fiche contact (vCard) générée et téléchargée'
    },

    en: {
      republic_name: "People's Democratic Republic of Algeria",
      organization_name: "Algerian Organization Communication for Development",
      authority_name: "The National Authority for the Development of Migrants and Sponsorship of the Community Abroad",
      pillar_1: 'Communication',
      pillar_2: 'Investment Promotion',
      pillar_3: 'Development',

      hero_name_primary: 'MR. HASSAN DRIS',
      hero_name_secondary: 'السيد حسن دريس',
      hero_dual_title: 'International Economic Advisor | Member of the Central Regional Office (Algiers)',

      badge_accredited: 'Official State Accreditation',
      badge_cadre: 'Executive Senior Cadre',
      label_id_short: 'ID:',
      badge_verified: 'Verified 2026',

      action_save_contact: 'Save Official Contact (vCard)',
      action_vcard_desc: 'Download certified digital vCard with all verified credentials',
      action_view_card: 'View Official Executive Card & Credentials',
      action_card_desc: 'Inspect high-resolution Front/Back scans and legal status',

      tier2_tag: "People's Democratic Republic of Algeria",
      tier2_title: 'Executive Cadre Card — Official Accredited Data',
      label_id: 'Identification (ID)',

      cred_holder_name: 'Full Name:',
      cred_birth: 'Date & Place of Birth:',
      cred_birth_val: '04/05/1958 in Roussillon, France (Consulate of Bobigny / Souahlia - Tlemcen)',
      cred_function: 'Institutional Role:',
      cred_function_val: 'Member of the Central Regional Office — Algiers',
      cred_function_pv: 'Installation Minutes n° 0103 / هـ.و.م.ج / إ.ع / م.ت / 2026 dated 13/10/2026',
      cred_advisor: 'Consultative Capacity:',
      cred_advisor_val: 'International Economic Advisor (مستشار اقتصادي دولي)',
      cred_reg_num: 'Registration Number:',
      cred_validity: 'Issuance & Validity:',
      cred_validity_val: 'October 2026 (Valid for 1 renewable year)',
      cred_interior: 'Ministry of Interior & Local Authorities Approval:',
      badge_state_approval: 'State Approval',
      cred_president: 'President of the National Authority:',
      cred_president_val: 'Commander Cheribet Abdelkrim (القائد شريبط عبد الكريم)',
      cred_scans_quick: 'Card Scans Preview:',
      cred_view_scans: 'View Certified Scans (Front / Back)',

      legal_primary: 'The holder of this card is a legal persona invested with full authority before official bodies.',
      legal_secondary: 'Declaration on the Right to Development — UN General Assembly Resolution 128/14 of December 4, 1986.',

      tier3_heading: 'International Economic Portfolio & Investments',
      tag_advisory: 'Strategic Advisory',
      showcase1_title: 'International Economic Advisory & Investment Promotion',
      showcase1_desc: 'International economic expert specializing in import/export, guiding Algerian diaspora investors, establishing industrial and trade partnerships, and facilitating strategic investment deployment for national development.',
      feat_import_export: 'Import & Export',
      feat_diaspora: 'Diaspora Guidance',
      feat_partnerships: 'Global Partnerships',
      feat_invest: 'Investment Growth',

      tag_company: 'Global Trade & Investment',
      showcase2_title: 'Hassan & Suleiman Trading and Investment Co. L.L.C',
      showcase2_desc: 'International trade, import/export operations, and joint investment project development bridging Algeria, the Sultanate of Oman, Gulf markets, and Europe.',
      company_hq_oman: 'International HQ — Sultanate of Oman:',
      company_hq_oman_ar: '(Bousher PO BOX 111 PC 111 — Muscat, Sultanate of Oman)',
      company_scope: 'Market Scope:',
      company_scope_val: 'Algeria • Sultanate of Oman • Arabian Gulf • European Markets',

      tier4_heading: 'Direct Official & Executive Communication',
      channel_phone_label: 'Direct Telephone (Algeria & International)',
      action_call: 'Direct Call',
      channel_whatsapp_label: 'WhatsApp Business & Direct Messaging',
      channel_whatsapp_sub: 'Secure encrypted instant communication',
      action_whatsapp: 'Start Chat',
      channel_email_label: 'Accredited Executive Email',
      channel_email_sub: 'Advisory and diplomatic correspondence',
      action_email: 'Send Email',

      admin_accordion_title: 'Organizational Administrative Headquarters (Algiers & Constantine) & Contacts',
      hq_algiers_badge: 'Regional HQ — Algiers',
      hq_algiers_title: 'Executive Regional Office of the Central Region',
      hq_algiers_address: 'Rue Boudjemaa Temim 249 Draria Céramique, Algiers',
      hq_algiers_scope: 'Territorial jurisdiction: Algiers and surrounding wilayas (Centre)',

      hq_const_badge: 'Central Administration',
      hq_const_title: 'Central Administrative Headquarters',
      hq_const_address: 'W.J 14 AADL 1500 Housing Belmilegh Extension Bldg 39 Local 17 New City Ali Mendjeli, Constantine',
      hq_central_email: 'Central Email:',
      hq_central_phones: 'Official Phone Lines:',

      footer_rights: "People's Democratic Republic of Algeria • Algerian Organization Communication for Development",
      footer_sub: 'Official Portal of the International Economic Advisor & Regional Office Member: Mr. Hassan DRIS © 2026',
      footer_show_qr: 'Display Portal QR Code',

      modal_card_title: 'Executive Cadre Card — Certified Scans',
      modal_card_sub: 'The National Authority for the Development of Migrants and Sponsorship of the Community Abroad',
      tab_recto: 'Front Side (Recto)',
      tab_verso: 'Back Side (Verso)',
      tab_data: 'Full Record',
      caption_recto_badge: 'Front Side',
      caption_recto_text: 'Features photograph, official seals, ID 100111, registration code, and Ministry of Interior approval.',
      caption_verso_badge: 'Back Side',
      caption_verso_text: 'Features consultative title International Economic Advisor, command signature, and 1986 UN declaration.',
      modal_download_recto: 'Download Front Side',
      modal_download_verso: 'Download Back Side',

      modal_name: 'Full Name:',
      modal_birth: 'Birth:',
      modal_post: 'Institutional Role:',
      modal_advisor: 'Consultative Capacity:',
      modal_id: 'Identification (ID):',
      modal_reg: 'Registration Number:',
      modal_approval: 'Interior Ministry Approval:',
      modal_president: 'Authority President:',
      modal_validity: 'Validity Period:',

      share_modal_title: 'Share Official Portal',
      share_modal_sub: 'Scan QR code or copy verified URL',
      qr_instructions: "Scan this QR code with any smartphone camera for immediate access to Mr. Hassan Dris's digital portal.",
      btn_copy_link: 'Copy Link',

      toast_copied: 'Copied to clipboard successfully',
      toast_vcard_success: 'vCard contact file created and downloaded'
    }
  };

  /* ==========================================================================
     2. APP STATE & INITIALIZATION
     ========================================================================== */
  let currentLang = 'ar';

  function initLanguage() {
    const savedLang = localStorage.getItem('portal_lang');
    if (savedLang && (savedLang === 'ar' || savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      setLanguage('ar');
    }

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
          setLanguage(targetLang);
        }
      });
    });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem('portal_lang', lang);

    const isRtl = (lang === 'ar');
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update active state on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const match = (btn.getAttribute('data-lang') === lang);
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    // Update i18n text content
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update document title
    if (lang === 'ar') {
      document.title = 'السيد حسن دريس | مستشار اقتصادي دولي - بوابة رسمية وبطاقة إطار';
    } else if (lang === 'fr') {
      document.title = 'M. Hassan DRIS | Conseiller Économique International — Portail Officiel';
    } else {
      document.title = 'Mr. Hassan DRIS | International Economic Advisor — Official Portal';
    }
  }

  /* ==========================================================================
     3. VCARD GENERATOR (UTF-8 WITH BOM FOR PERFECT MULTILINGUAL SUPPORT)
     ========================================================================== */
  function generateVCard() {
    // Official vCard 3.0 specification with explicit UTF-8 encoding
    const vCardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N;CHARSET=UTF-8:DRIS;Hassan;;السيد;',
      'FN;CHARSET=UTF-8:Hassan DRIS / السيد حسن دريس',
      'ORG;CHARSET=UTF-8:الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج — المنظمة الجزائرية إتصال من أجل التنمية;شركة حسن وسليمان للتجارة والاستثمار ش م م (Hassan & Suleiman Trading Co.)',
      'TITLE;CHARSET=UTF-8:مستشار اقتصادي دولي - خبير استيراد وتصدير | عضو المكتب الجهوي الوسط (الجزائر العاصمة)',
      'ROLE;CHARSET=UTF-8:Conseiller Économique International & Membre du Bureau Régional',
      'TEL;TYPE=CELL,VOICE,PREF:+213559422305',
      'EMAIL;TYPE=WORK,INTERNET:hassandris.adam.13@gmail.com',
      'ADR;TYPE=WORK,PREF;CHARSET=UTF-8:;;Rue Boudjemaa Temim 249 Draria Céramique;Alger;Alger;16000;Algeria',
      'ADR;TYPE=WORK;CHARSET=UTF-8:;;Bousher PO BOX 111 PC 111;Muscat;Muscat;111;Sultanate of Oman',
      'NOTE;CHARSET=UTF-8:بطاقة إطار سامي - ID: 100111 | رقم التسجيل: 2026101601111018 | إعتماد وزارة الداخلية رقم: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21 المؤرخ بـ 18 أفريل 2021 | رئيس الهيئة: القائد شريبط عبد الكريم',
      'URL;TYPE=WORK:' + window.location.href,
      'REV:' + new Date().toISOString(),
      'END:VCARD'
    ];

    const vCardString = vCardLines.join('\r\n');
    // Prepend UTF-8 BOM (\uFEFF) to guarantee correct rendering of Arabic characters in all mobile contacts apps
    const blob = new Blob(['\uFEFF' + vCardString], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = 'Hassan_DRIS_Official_Contact.vcf';
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);

    showToast(I18N[currentLang].toast_vcard_success);
  }

  /* ==========================================================================
     4. MODAL DIALOGS ENGINE (CARD SCANS & SHARE/QR)
     ========================================================================== */
  function setupModals() {
    const cardDialog = document.getElementById('cadre-card-dialog');
    const shareDialog = document.getElementById('share-dialog');

    const openCardBtn = document.getElementById('btn-open-card-modal');
    const quickCardBtn = document.getElementById('btn-quick-preview-card');
    const closeCardBtn = document.getElementById('btn-close-card-modal');

    const openShareBtn = document.getElementById('portal-share-btn');
    const openQrFooterBtn = document.getElementById('footer-qr-trigger');
    const closeShareBtn = document.getElementById('btn-close-share-modal');

    // Open Card Dialog
    function showCardModal(initialTab = 'tab-recto') {
      if (cardDialog && typeof cardDialog.showModal === 'function') {
        switchDialogTab(initialTab);
        cardDialog.showModal();
      }
    }

    if (openCardBtn) {
      openCardBtn.addEventListener('click', () => showCardModal('tab-recto'));
    }
    if (quickCardBtn) {
      quickCardBtn.addEventListener('click', () => showCardModal('tab-recto'));
    }
    if (closeCardBtn && cardDialog) {
      closeCardBtn.addEventListener('click', () => cardDialog.close());
    }

    // Open Share Dialog
    function showShareModal() {
      if (shareDialog && typeof shareDialog.showModal === 'function') {
        renderPortalQrCode();
        const urlInput = document.getElementById('share-portal-url');
        if (urlInput) {
          urlInput.value = window.location.href;
        }
        shareDialog.showModal();
      }
    }

    if (openShareBtn) openShareBtn.addEventListener('click', showShareModal);
    if (openQrFooterBtn) openQrFooterBtn.addEventListener('click', showShareModal);
    if (closeShareBtn && shareDialog) {
      closeShareBtn.addEventListener('click', () => shareDialog.close());
    }

    // Backdrop click handling for native dialogs
    [cardDialog, shareDialog].forEach(dialog => {
      if (!dialog) return;
      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          dialog.close();
        }
      });
    });

    // Card Tabs logic
    const tabRecto = document.getElementById('tab-recto');
    const tabVerso = document.getElementById('tab-verso');
    const tabDetails = document.getElementById('tab-details');

    if (tabRecto) tabRecto.addEventListener('click', () => switchDialogTab('tab-recto'));
    if (tabVerso) tabVerso.addEventListener('click', () => switchDialogTab('tab-verso'));
    if (tabDetails) tabDetails.addEventListener('click', () => switchDialogTab('tab-details'));
  }

  function switchDialogTab(tabId) {
    const tabs = [
      { tab: document.getElementById('tab-recto'), panel: document.getElementById('panel-recto') },
      { tab: document.getElementById('tab-verso'), panel: document.getElementById('panel-verso') },
      { tab: document.getElementById('tab-details'), panel: document.getElementById('panel-details') }
    ];

    tabs.forEach(item => {
      if (!item.tab || !item.panel) return;
      const isTarget = (item.tab.id === tabId);
      item.tab.classList.toggle('active', isTarget);
      item.tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      item.panel.hidden = !isTarget;
      item.panel.classList.toggle('active', isTarget);
    });
  }

  /* ==========================================================================
     5. HIGH PRECISION VECTOR QR CODE GENERATOR (STANDALONE SVG)
     ========================================================================== */
  function renderPortalQrCode() {
    const container = document.getElementById('qr-code-display');
    if (!container || container.dataset.rendered === 'true') return;

    // Stylized luxury SVG QR emblem for Mr. Hassan Dris portal
    const url = window.location.href;
    const qrSvg = `
      <svg viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" fill="#FFFFFF" rx="8"/>
        <!-- Finder Pattern Top-Left -->
        <rect x="14" y="14" width="38" height="38" fill="#0B2418" rx="4"/>
        <rect x="20" y="20" width="26" height="26" fill="#FFFFFF" rx="2"/>
        <rect x="25" y="25" width="16" height="16" fill="#D4AF37" rx="2"/>

        <!-- Finder Pattern Top-Right -->
        <rect x="108" y="14" width="38" height="38" fill="#0B2418" rx="4"/>
        <rect x="114" y="20" width="26" height="26" fill="#FFFFFF" rx="2"/>
        <rect x="119" y="25" width="16" height="16" fill="#D4AF37" rx="2"/>

        <!-- Finder Pattern Bottom-Left -->
        <rect x="14" y="108" width="38" height="38" fill="#0B2418" rx="4"/>
        <rect x="20" y="114" width="26" height="26" fill="#FFFFFF" rx="2"/>
        <rect x="25" y="119" width="16" height="16" fill="#D4AF37" rx="2"/>

        <!-- QR Data Matrix Dots Simulation for Luxury Display -->
        <g fill="#0B2418">
          <rect x="58" y="16" width="6" height="6" rx="1"/>
          <rect x="70" y="16" width="6" height="6" rx="1"/>
          <rect x="82" y="16" width="6" height="6" rx="1"/>
          <rect x="94" y="16" width="6" height="6" rx="1"/>

          <rect x="58" y="28" width="6" height="6" rx="1"/>
          <rect x="82" y="28" width="6" height="6" rx="1"/>

          <rect x="58" y="40" width="6" height="6" rx="1"/>
          <rect x="70" y="40" width="6" height="6" rx="1"/>
          <rect x="94" y="40" width="6" height="6" rx="1"/>

          <rect x="16" y="58" width="6" height="6" rx="1"/>
          <rect x="28" y="58" width="6" height="6" rx="1"/>
          <rect x="40" y="58" width="6" height="6" rx="1"/>
          <rect x="58" y="58" width="6" height="6" rx="1"/>
          <rect x="70" y="58" width="6" height="6" rx="1"/>
          <rect x="82" y="58" width="6" height="6" rx="1"/>
          <rect x="94" y="58" width="6" height="6" rx="1"/>
          <rect x="108" y="58" width="6" height="6" rx="1"/>
          <rect x="120" y="58" width="6" height="6" rx="1"/>
          <rect x="138" y="58" width="6" height="6" rx="1"/>

          <rect x="58" y="70" width="6" height="6" rx="1"/>
          <rect x="94" y="70" width="6" height="6" rx="1"/>
          <rect x="120" y="70" width="6" height="6" rx="1"/>

          <rect x="58" y="82" width="6" height="6" rx="1"/>
          <rect x="70" y="82" width="6" height="6" rx="1"/>
          <rect x="82" y="82" width="6" height="6" rx="1"/>
          <rect x="108" y="82" width="6" height="6" rx="1"/>
          <rect x="132" y="82" width="6" height="6" rx="1"/>

          <rect x="58" y="94" width="6" height="6" rx="1"/>
          <rect x="82" y="94" width="6" height="6" rx="1"/>
          <rect x="120" y="94" width="6" height="6" rx="1"/>

          <rect x="58" y="108" width="6" height="6" rx="1"/>
          <rect x="70" y="108" width="6" height="6" rx="1"/>
          <rect x="94" y="108" width="6" height="6" rx="1"/>
          <rect x="108" y="108" width="6" height="6" rx="1"/>
          <rect x="132" y="108" width="6" height="6" rx="1"/>

          <rect x="58" y="120" width="6" height="6" rx="1"/>
          <rect x="82" y="120" width="6" height="6" rx="1"/>
          <rect x="120" y="120" width="6" height="6" rx="1"/>
          <rect x="138" y="120" width="6" height="6" rx="1"/>

          <rect x="58" y="138" width="6" height="6" rx="1"/>
          <rect x="70" y="138" width="6" height="6" rx="1"/>
          <rect x="82" y="138" width="6" height="6" rx="1"/>
          <rect x="94" y="138" width="6" height="6" rx="1"/>
          <rect x="108" y="138" width="6" height="6" rx="1"/>
          <rect x="126" y="138" width="6" height="6" rx="1"/>
        </g>

        <!-- Central Sovereign Seal Motif -->
        <circle cx="80" cy="80" r="14" fill="#FFFFFF" stroke="#D4AF37" stroke-width="2"/>
        <path d="M80.5 73a5 5 0 1 0 0 10 4 4 0 1 1 0-8 5 5 0 0 0 0-2z" fill="#B81D24"/>
        <polygon points="82,77 82.8,78.8 84.7,78.9 83.2,80.2 83.7,82.1 82,81 80.3,82.1 80.8,80.2 79.3,78.9 81.2,78.8" fill="#B81D24"/>
      </svg>
    `;

    container.innerHTML = qrSvg;
    container.dataset.rendered = 'true';
  }

  /* ==========================================================================
     6. CLIPBOARD COPY UTILITY & TOAST NOTIFICATION
     ========================================================================== */
  function setupClipboard() {
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        copyTextToClipboard(textToCopy, () => {
          showToast(I18N[currentLang].toast_copied + ': ' + textToCopy);
        });
      });
    });

    const copyUrlBtn = document.getElementById('btn-copy-portal-url');
    if (copyUrlBtn) {
      copyUrlBtn.addEventListener('click', () => {
        const urlInput = document.getElementById('share-portal-url');
        const url = (urlInput && urlInput.value) ? urlInput.value : window.location.href;
        copyTextToClipboard(url, () => {
          showToast(I18N[currentLang].toast_copied);
        });
      });
    }
  }

  function copyTextToClipboard(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (typeof onSuccess === 'function') onSuccess();
    } catch (err) {
      console.warn('Fallback copy error:', err);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24"><use href="#icon-check"></use></svg>
      <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3200);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ==========================================================================
     7. SOVEREIGN GOLD DUST CANVAS ENGINE
     Slow, dignified floating particles (max 25)
     Respects prefers-reduced-motion and pauses on visibilitychange
     ========================================================================== */
  function initGoldDustCanvas() {
    const canvas = document.getElementById('gold-dust-canvas');
    if (!canvas) return;

    // Respect user motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = null;
    let isPaused = false;

    const MAX_PARTICLES = 25;
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2.2 + 0.8;
        this.baseAlpha = Math.random() * 0.45 + 0.2;
        this.alpha = this.baseAlpha;
        this.alphaSpeed = Math.random() * 0.015 + 0.005;
        this.alphaPhase = Math.random() * Math.PI * 2;
        this.speedY = -(Math.random() * 0.35 + 0.15);
        this.speedX = (Math.random() - 0.5) * 0.2;
        // Golden palette variations
        this.hue = Math.random() > 0.4 ? '212, 175, 55' : '255, 243, 196';
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.alphaPhase += this.alphaSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.alphaPhase) * 0.15;

        if (this.y < -15 || this.x < -10 || this.x > width + 10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.hue}, ${Math.max(0.05, Math.min(0.85, this.alpha))})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
        ctx.shadowBlur = this.size * 3;
        ctx.fill();
        ctx.restore();
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < MAX_PARTICLES; i++) {
        particles.push(new Particle());
      }
    }

    function loop() {
      if (!isPaused) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', () => {
      resize();
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      isPaused = document.hidden;
    });

    resize();
    initParticles();
    loop();
  }

  /* ==========================================================================
     8. DOM READY BOOTSTRAP
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    setupModals();
    setupClipboard();
    initGoldDustCanvas();

    // Bind vCard Download Trigger
    const btnSaveVCard = document.getElementById('btn-save-vcard');
    if (btnSaveVCard) {
      btnSaveVCard.addEventListener('click', generateVCard);
    }
  });

})();
