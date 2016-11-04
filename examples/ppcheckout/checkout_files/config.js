window.config = {
  "disableLightbox": false,
  "enableGuestWps": true,
  "enableShippingTaxGuestWPS": true,
  "enableInventoryWPS": true,
  "enableInventoryGuestWPS": true,
  "enableShoppingCartWPS": true,
  "bmlMaxSoftDeclines": 3,
  "enablePreload": true,
  "blockStudentAccount": true,
  "minCreditAmtNoInterest": {
    "US": 99
  },
  "windowloadTimeout": {
    "throttle": 50,
    "testTimeout": 50000
  },
  "bootTimeout": {
    "throttle": 50,
    "test": 15
  },
  "safeApply": true,
  "scriptLoadTest": {
    "enable": true
  },
  "fallbackEnabled": true,
  "hermesXoonRedirect": true,
  "unselectableLanguages": [],
  "unsupportedLanguages": [],
  "capeMayflyUniqueId": "hermesnodeweb-",
  "urls": {
    "xoScriptUrl": "https://www.paypalobjects.com/js/xo/hermes/1.0.0/framework.js",
    "baseUrl": "/webapps/hermes",
    "logUrl": "/webapps/hermes/api/log",
    "staticUrl": "/webapps/hermes/static",
    "fptiScriptUrl": "https://www.paypalobjects.com/pa/js/pa.js",
    "fptiBeaconUrl": "https://t.paypal.com/ts",
    "fraudnetUrl": {
      "active": "https://www.paypalobjects.com/webstatic/r/fb/fb-all-prod.pp.min.js",
      "passive": "https://c.paypal.com/webstatic/r/fb/fb-all-prod.pp2.min.js"
    },
    "onboarding": "https://www.paypal.com/webapps/xoonboarding",
    "tagProdUrl": "https://www.paypalobjects.com/tagmgmt/bootstrap.js",
    "tagStageUrl": "https://nexus.ensighten.com/paypal/stage/Bootstrap.js",
    "dispatch": {
      "xoon": "https://msmaster.qa.paypal.com"
    },
    "fallbackUrl": {
      "buyNow": "/webapps/hermes/fallback?product=buyNow",
      "cartUpload": "/webapps/hermes/fallback?product=cartUpload",
      "ux": "/webapps/hermes/fallback?product=ec",
      "aries": "/checkoutnow/2",
      "xoon": "/webapps/xoonboarding"
    },
    "nbrUrl": "/de/cgi-bin/webscr?cmd=_negative_balance_collections",
    "ulLogoutUrl": "/signin/signout?hard=true",
    "authChallengeNodeUrl": "https://www.paypal.com/auth/stepup",
    "capeUrl": "https://www.paypal.com/ppcreditapply/he/us?key=",
    "creditTerms": "https://www.securecheckout.billmelater.com/paycapture-content/fetch?hash=AU826TU8&content=/bmlweb/bmlppaiw.html",
    "creditReuseTerms": "https://www.billmelater.com/cm/paypal/landers/16ppcREUSE.html",
    "errorUrl": "/error",
    "incontextScript": "https://www.paypalobjects.com/api"
  },
  "features": {
    "AR": {
      "rmSpinnerText": false
    },
    "AT": {
      "isoCurrencyFormat": true
    },
    "AU": {
      "addressNormalization": true,
      "directDebitAgreement": false,
      "newForgotPasswordSupported": true,
      "oneTouchPersonalization": true
    },
    "BE": {
      "isoCurrencyFormat": true
    },
    "CA": {
      "newForgotPasswordSupported": true
    },
    "CH": {
      "isoCurrencyFormat": true
    },
    "DE": {
      "newForgotPasswordSupported": true,
      "addBank": true,
      "oneTouchPersonalization": true
    },
    "DK": {
      "isoCurrencyFormat": true
    },
    "ES": {
      "isoCurrencyFormat": true,
      "newForgotPasswordSupported": true
    },
    "FR": {
      "isoCurrencyFormat": true,
      "newForgotPasswordSupported": true,
      "oneTouchPersonalization": true
    },
    "GB": {
      "maestroCvvRequired": true,
      "newForgotPasswordSupported": true,
      "blockCreditBanners": true,
      "oneTouchPersonalization": true
    },
    "IT": {
      "newForgotPasswordSupported": true
    },
    "MX": {
      "showAcceptedCardLogos": false,
      "oneTouchPersonalization": true
    },
    "NL": {
      "isoCurrencyFormat": true
    },
    "NO": {
      "isoCurrencyFormat": true
    },
    "PL": {
      "isoCurrencyFormat": true
    },
    "RU": {
      "collectKYC": true,
      "qiwiCardSupported": true
    },
    "SE": {
      "isoCurrencyFormat": true
    },
    "SG": {
      "newForgotPasswordSupported": true
    },
    "TR": {
      "isoCurrencyFormat": true,
      "rmSpinnerText": false
    },
    "DEFAULT": {
      "addressLookup": false,
      "changeShippingCountry": true,
      "enableStickyFunding": false,
      "jqueryAjax": true,
      "maestroCvvRequired": false,
      "preferredShipping": true,
      "propValue": true,
      "riskyLoginContingency": true,
      "showPayWithCreditOffer": false,
      "showPolicyAgreement": false,
      "supportBlockNonDomesticShipping": false,
      "defaultLoginMethodUL": true,
      "enableOneTouchInternalIP": true,
      "landingAbTest": true,
      "showAcceptedCardLogos": true,
      "languageToggle": true,
      "creditInstallmentOffers": false,
      "enableManageWallet": true,
      "redirectToCape": 0,
      "rmSpinnerText": true,
      "pomaPasswordRecovery": false,
      "morsValuePropOffers": false,
      "rtl": true,
      "creditOfferSeeTermsUrl": "https://www.paypal.com/us/webapps/mpp/credit-easy-payments?"
    },
    "BR": {
      "addressNormalization": true,
      "cardTypeServiceCallRequired": true,
      "checkLandingParam": true,
      "maskCVV": true,
      "shippingAddressNormalization": true,
      "showAcceptedCardLogos": true,
      "unsupportedPayeeCurrency": true,
      "uxFallback": true,
      "oneTouchPersonalization": true,
      "FormatAddressForNormalization": "AddressBR",
      "sortStatesForAddress": "provinceListBR",
      "zipcodeInputParams": {
        "formatZip": true,
        "maxLength": 9,
        "minLength": 5,
        "formatPattern": "[^0-9]"
      }
    },
    "C2": {
      "cardTypeServiceCallRequired": true,
      "dualCardTypes": {
        "CUP": "^CUP$"
      }
    },
    "HK": {
      "newForgotPasswordSupported": true,
      "nameFormat": "LastFirst"
    },
    "JP": {
      "showAcceptedCardLogos": true,
      "showPolicyAgreement": true,
      "disableFullWidthCharacters": true,
      "nameFormat": "LastFirst",
      "zipcodeInputParams": {
        "formatZip": true,
        "maxLength": 8,
        "minLength": 3,
        "formatPattern": "[^0-9]"
      }
    },
    "TW": {
      "newForgotPasswordSupported": true,
      "nameFormat": "LastFirst"
    },
    "US": {
      "changeShippingCountry": true,
      "giftCard": false,
      "newForgotPasswordSupported": true,
      "showPaypalPolicies": true,
      "showPhoneDisclosure": true,
      "creditInstallmentOffers": true,
      "supportBlockNonDomesticShipping": true,
      "oneTouchPersonalization": true,
      "redirectToCape": 100,
      "phoneConsent": true,
      "morsValuePropOffers": true,
      "creditOfferSeeTermsUrl": "https://www.paypal.com/us/webapps/mpp/credit-easy-payments?"
    }
  },
  "purchaseProtectionProp": {
    "pxp": {
      "pgName": "xo_hermes_purchase_protection",
      "patterns": "xo_hermes_purchase_protection_treatment"
    }
  },
  "fallbackWhitelist": {
    "throttle": 10,
    "whitelisted": [
      "windowload_timed_out",
      "bootstrap_failed",
      "buyer_ineligible",
      "transaction_ineligible",
      "ui_unhandled_response_status_404",
      "ul_load_timeout",
      "ui_unhandled_api_error",
      "gce_not_supported",
      "UNSUPPORTED_CUP_SECURECARD",
      "INVALID_IBAN_CODE",
      "MANDATE_METHOD_NOT_ELIGIBLE",
      "SEPA_ACCEPT_CONTINGENCY",
      "ROUTING_NUMBER_NOT_SUPPORTED",
      "fallback_merchant_BA_nocards"
    ]
  },
  "disableMerchantForStickyBA": [
    "7PCCZSK8KNQNC",
    "HPA2FSJN9ZPRL",
    "A2ZWHC6LATX5A"
  ],
  "forceCookiesDisabled": [
    "2ZEHYJ9KV7XZU",
    "3GE7WZTZVHD44",
    "3L96P5SPM9TY2",
    "3LWC6DDP3QV96",
    "4EKZUVKMFWPE4",
    "4GPAW7J4N7MJS",
    "59K2QRYYSFJU4",
    "5HP7BLEWUD4U2",
    "5XU8KL5NKH4ZW",
    "98YYCFFJNPKR8",
    "9RP39395VRXG2",
    "AW538GXAZV788",
    "BFL7HFYR2S4AL",
    "EJP3L2LCJLR2W",
    "F8KUSVLTFSBR6",
    "FUAN38EF6XZNJ",
    "HRN3K38HHEJKG",
    "KTP56GJZDRPD2",
    "SR6YGVCDRKNT8",
    "UMBWHC38PBAKC",
    "UWH9TDVFHV6WS",
    "VU7P9REG8HYVC",
    "Z9FY3JQ9AGJQ8",
    "ZNESVVRVPVQ96"
  ],
  "defaultLanguageException": {
    "BE": "nl",
    "GB": "en",
    "HK": "zh",
    "PT": "pt"
  },
  "apacCountries": [
    "BN",
    "BT",
    "C2",
    "FM",
    "HK",
    "ID",
    "IN",
    "JP",
    "KH",
    "KR",
    "LA",
    "LK",
    "MN",
    "MV",
    "MY",
    "NP",
    "NZ",
    "PH",
    "SG",
    "TH",
    "TO",
    "TW",
    "VN",
    "WS"
  ],
  "ulMeta": {
    "iframeCopy": false,
    "allowKMLIForInternalIP": true,
    "enableOneTouchByDefault": false,
    "stsClientIdUL": "AfC7MRCuR0r3zXzYAiQzXwSGfSr6fSvaJ2lh8adnWkT45wIhhsbGWy1dD8bx",
    "stsReturnUrl": "https://www.paypal.com/checkoutnow/2",
    "pxpExpId": "xo_hermesnode_ul",
    "kmliContentExpId": "xo_hermesnode_kmli_content",
    "ulReturnUri": "https://www.paypal.com/checkoutnow/2",
    "authChallengeReturnUri": "webapps/hermes",
    "hermesnodePxpConfig": "xo_hermesnode_config"
  },
  "pxpExperiments": {
    "BR": {
      "xo_br_hermesnode_login_design": {
        "pgName": "xo_hermesnode_login_design",
        "pattern": "xo_br_hermesnode_login_design_[\\w]+",
        "params": {
          "ctx.COUNTRY": "BR"
        }
      },
      "xo_br_hermesnode_ryi_design": {
        "pgName": "xo_hermesnode_ryi_design",
        "pattern": "xo_br_hermesnode_ryi_design_[\\w]+",
        "params": {
          "ctx.COUNTRY": "BR"
        }
      }
    },
    "stickyBillingAgreementPxp": {
      "pgName": "xo_hermes_sticky_ba",
      "pattern": "xo_hermes_sticky_ba_test_group"
    }
  },
  "locale": {
    "country": {
      "resolvers": [
        "viaCountryPreference",
        "viaLocaleTestUrlParam",
        "viaUserProfile",
        "viaMerchantParam",
        "viaCheckoutSession",
        "viaLangCookie",
        "viaIP",
        "viaCountryCoBrand",
        "viaCheckoutShipping",
        "viaMerchantCountry",
        "viaBrowserPref",
        "viaDefault"
      ]
    },
    "lang": {
      "resolvers": [
        "viaLanguagePreference",
        "viaLocaleTestUrlParam",
        "viaUserProfile",
        "viaMerchantParam",
        "viaLangCookie",
        "viaMerchantLocale",
        "viaBrowserPref",
        "viaDefault"
      ]
    }
  },
  "betaLanguages": [
    "he",
    "ar"
  ],
  "currencySymbols": {
    "ALL": "L",
    "AFN": "؋",
    "ARS": "$",
    "AWG": "ƒ",
    "AUD": "$",
    "AZN": "₼",
    "BSD": "$",
    "BBD": "$",
    "BTN": "BTN",
    "BYR": "p.",
    "BZD": "BZ$",
    "BMD": "$",
    "BOB": "Bs.",
    "BAM": "KM",
    "BWP": "P",
    "BGN": "лв",
    "BRL": "R$",
    "BND": "$",
    "KHR": "៛",
    "CAD": "$",
    "KYD": "$",
    "CLP": "$",
    "CNY": "¥",
    "COP": "$",
    "CRC": "₡",
    "HRK": "kn",
    "CUP": "₱",
    "CZK": "Kč",
    "DKK": "Dkr",
    "DOP": "RD$",
    "XCD": "$",
    "EGP": "£",
    "SVC": "$",
    "EEK": "kr",
    "EUR": "€",
    "FKP": "£",
    "FJD": "$",
    "GHC": "¢",
    "GIP": "£",
    "GTQ": "Q",
    "GGP": "£",
    "GYD": "$",
    "HNL": "L",
    "HKD": "$",
    "HUF": "Ft",
    "ISK": "kr",
    "INR": "₹",
    "IDR": "Rp",
    "IRR": "﷼",
    "IMP": "£",
    "ILS": "₪",
    "JMD": "J$",
    "JPY": "¥",
    "JEP": "£",
    "KES": "KSh",
    "KZT": "лв",
    "KPW": "₩",
    "KRW": "₩",
    "KGS": "лв",
    "LAK": "₭",
    "LVL": "Ls",
    "LBP": "£",
    "LRD": "$",
    "LTL": "Lt",
    "MKD": "ден",
    "MVR": "MVR",
    "MYR": "RM",
    "MUR": "₨",
    "MXN": "$",
    "MNT": "₮",
    "MZN": "MT",
    "NAD": "$",
    "NPR": "₨",
    "ANG": "ƒ",
    "NZD": "$",
    "NIO": "C$",
    "NGN": "₦",
    "NOK": "Nkr",
    "OMR": "﷼",
    "PKR": "₨",
    "PAB": "B/.",
    "PYG": "Gs",
    "PEN": "S/.",
    "PHP": "₱",
    "PLN": "zł",
    "QAR": "﷼",
    "RON": "lei",
    "RUB": "",
    "SHP": "£",
    "SAR": "﷼",
    "RSD": "Дин.",
    "SCR": "₨",
    "SGD": "$",
    "SBD": "$",
    "SOS": "S",
    "ZAR": "R",
    "LKR": "₨",
    "SEK": "kr",
    "CHF": "Fr.",
    "SRD": "$",
    "SYP": "£",
    "TOP": "T$",
    "TZS": "TSh",
    "TWD": "NT$",
    "THB": "฿",
    "TTD": "TT$",
    "TL": "TL",
    "TRY": "",
    "TRL": "₤",
    "TVD": "$",
    "UGX": "USh",
    "UAH": "₴",
    "GBP": "£",
    "USD": "$",
    "UYU": "$U",
    "UZS": "лв",
    "VEF": "Bs",
    "VND": "₫",
    "WST": "$",
    "YER": "﷼",
    "ZWD": "Z$"
  },
  "currencyFormat": {
    "AE": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "AG": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "AI": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "AR": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "AT": {
      "de": {
        ",": ".",
        ".": ","
      }
    },
    "AU": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "BA": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "BB": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "BE": {
      "en": {
        ",": ".",
        ".": ","
      },
      "fr": {
        ",": ".",
        ".": ","
      },
      "nl": {
        ",": ".",
        ".": ","
      }
    },
    "BF": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "BH": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "BG": {
      "en": {
        ",": " ",
        ".": ","
      }
    },
    "BI": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "BJ": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "BM": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "BO": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "BR": {
      "pt": {
        ",": ".",
        ".": ","
      }
    },
    "BS": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "BW": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "BZ": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "CA": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "CD": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "CG": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "CH": {
      "de": {
        ",": "'",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": "."
      }
    },
    "CI": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "CK": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "CL": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "CM": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "CO": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "CR": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "CY": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "CZ": {
      "en": {
        ",": " ",
        ".": ","
      }
    },
    "DE": {
      "de": {
        ",": ".",
        ".": ","
      }
    },
    "DJ": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "DK": {
      "da": {
        ",": ".",
        ".": ","
      }
    },
    "DM": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "DO": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "DZ": {
      "ar": {
        ",": ".",
        ".": ","
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "EC": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "EE": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "EG": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "ER": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "ES": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "FI": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "FJ": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "FK": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "FM": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "FR": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "GA": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "GB": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "GD": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "GF": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "GI": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "GL": {
      "da": {
        ",": ".",
        ".": ","
      }
    },
    "GM": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "GN": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "GP": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "GR": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "GT": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "GY": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "HK": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "HN": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "HU": {
      "en": {
        ",": " ",
        ".": ","
      }
    },
    "ID": {
      "en": {
        ",": ".",
        ".": "."
      },
      "id": {
        ",": ".",
        ".": ","
      }
    },
    "IE": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "IL": {
      "he": {
        ",": ",",
        ".": "."
      }
    },
    "IN": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "IT": {
      "it": {
        ",": ".",
        ".": ","
      }
    },
    "JM": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "JO": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "JP": {
      "ja": {
        ",": ",",
        ".": "."
      }
    },
    "KE": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "KI": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "KM": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "KN": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "KR": {
      "en": {
        ",": " ",
        ".": ","
      },
      "ko": {
        ",": ",",
        ".": "."
      }
    },
    "KW": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "KY": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "LC": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "LS": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "LU": {
      "de": {
        ",": ".",
        ".": ","
      },
      "en": {
        ",": ".",
        ".": ","
      },
      "fr": {
        ",": ".",
        ".": ","
      }
    },
    "LT": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "LV": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "MA": {
      "ar": {
        ",": ".",
        ".": ","
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MC": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MG": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MH": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "ML": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MQ": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MR": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MS": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "MT": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "MU": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "MW": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "MX": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "NA": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "NC": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "NE": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "NF": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "NG": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "NI": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "NL": {
      "nl": {
        ",": ".",
        ".": ","
      }
    },
    "NO": {
      "nb": {
        ",": " ",
        ".": ","
      },
      "no": {
        ",": " ",
        ".": ","
      }
    },
    "NR": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "NU": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "NZ": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "OM": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "PA": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "PE": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "PF": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "PG": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "PH": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "PL": {
      "pl": {
        ",": " ",
        ".": ","
      }
    },
    "PM": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "PN": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "PT": {
      "en": {
        ",": ".",
        ".": ","
      },
      "pt": {
        ",": " ",
        ".": ","
      }
    },
    "PW": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "PY": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "QA": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "RE": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "RO": {
      "en": {
        ",": " ",
        ".": ","
      }
    },
    "RU": {
      "ru": {
        ",": " ",
        ".": ","
      }
    },
    "RW": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "SA": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "SB": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "SC": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "SE": {
      "sv": {
        ",": " ",
        ".": ","
      }
    },
    "SG": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "SH": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "SI": {
      "en": {
        ",": ".",
        ".": ","
      }
    },
    "SK": {
      "en": {
        ",": " ",
        ".": ","
      }
    },
    "SL": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "SN": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "SV": {
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "SZ": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "TC": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "TD": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "TG": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "TH": {
      "th": {
        ",": ",",
        ".": "."
      }
    },
    "TN": {
      "ar": {
        ",": ".",
        ".": ","
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "TO": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "TR": {
      "tr": {
        ",": ".",
        ".": ","
      }
    },
    "TT": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "TV": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "TW": {
      "en": {
        ",": ""
      },
      "zh": {
        ",": ""
      }
    },
    "TZ": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "UA": {
      "en": {
        ",": " ",
        ".": ","
      },
      "ru": {
        ",": " ",
        ".": ","
      }
    },
    "UG": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "US": {
      "en": {
        ",": ",",
        ".": "."
      },
      "es": {
        ",": ",",
        ".": "."
      }
    },
    "UY": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "VC": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "VE": {
      "es": {
        ",": ".",
        ".": ","
      }
    },
    "VG": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "VU": {
      "en": {
        ",": ",",
        ".": "."
      },
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "WF": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "WS": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "YE": {
      "ar": {
        ",": "٬",
        ".": "٫"
      }
    },
    "YT": {
      "fr": {
        ",": " ",
        ".": ","
      }
    },
    "ZA": {
      "en": {
        ",": " ",
        ".": ","
      }
    },
    "ZM": {
      "en": {
        ",": ",",
        ".": "."
      }
    },
    "ZW": {
      "en": {
        ",": ",",
        ".": "."
      }
    }
  },
  "supportedCountries": {
    "SY": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MT": [
      "en"
    ],
    "MU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SD": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TK": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MV": [
      "en"
    ],
    "TF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MW": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PK": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MX": [
      "es",
      "en"
    ],
    "MY": [
      "en"
    ],
    "MP": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NA": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NC": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NE": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "TP": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TL": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "JP": [
      "ja",
      "en"
    ],
    "JO": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "IL": [
      "he",
      "en"
    ],
    "IE": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ID": [
      "id",
      "en"
    ],
    "HU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "JM": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "IT": [
      "it",
      "en"
    ],
    "IS": [
      "en"
    ],
    "IN": [
      "en"
    ],
    "SA": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "KP": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "RW": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "LB": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "RU": [
      "ru",
      "en"
    ],
    "LR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "RS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LY": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "RO": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "IO": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "RE": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "IQ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "QA": [
      "en",
      "fr",
      "es",
      "zh",
      "ar"
    ],
    "IR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PY": [
      "es",
      "en"
    ],
    "JE": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MO": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SC": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "SB": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BA": [
      "en"
    ],
    "KY": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AU": [
      "en"
    ],
    "KZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AW": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BF": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "BG": [
      "en"
    ],
    "BB": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BE": [
      "en",
      "nl",
      "fr"
    ],
    "KH": [
      "en"
    ],
    "KI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BH": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "KE": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BI": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "KG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "KR": [
      "ko",
      "en"
    ],
    "KW": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "KM": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "KN": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "HM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LK": [
      "en"
    ],
    "LA": [
      "en"
    ],
    "US": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LC": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "UY": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "GQ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LU": [
      "en",
      "de",
      "fr",
      "es",
      "zh"
    ],
    "GH": [
      "en"
    ],
    "LV": [
      "en",
      "ru",
      "fr",
      "es",
      "zh"
    ],
    "GG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "EH": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "LT": [
      "en",
      "ru",
      "fr",
      "es",
      "zh"
    ],
    "CX": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TT": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TV": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MA": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TN": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TO": [
      "en"
    ],
    "MC": [
      "fr",
      "en"
    ],
    "UA": [
      "en",
      "ru",
      "fr",
      "es",
      "zh"
    ],
    "UG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TW": [
      "zh",
      "en"
    ],
    "IM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "HT": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GD": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GB": [
      "en",
      "fr"
    ],
    "GF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GE": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "FO": [
      "da",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "FM": [
      "en"
    ],
    "GA": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "FR": [
      "fr",
      "en"
    ],
    "GL": [
      "da",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NG": [
      "en"
    ],
    "NF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NL": [
      "nl",
      "en"
    ],
    "NI": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "NP": [
      "en"
    ],
    "NO": [
      "no",
      "en"
    ],
    "NU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "OM": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "NZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GT": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "GW": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GY": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "HK": [
      "en",
      "zh"
    ],
    "GM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GN": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "GP": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "GR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "HN": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "HR": [
      "en"
    ],
    "SJ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SK": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SL": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SE": [
      "sv",
      "en"
    ],
    "SG": [
      "en"
    ],
    "SH": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SN": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "SO": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CC": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "DK": [
      "da",
      "en"
    ],
    "CF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "DJ": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "BD": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "DE": [
      "de",
      "en"
    ],
    "BV": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CY": [
      "en"
    ],
    "AS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AX": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CV": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CR": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "AF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AQ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CO": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "CS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "DO": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "CU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "DM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MH": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "YT": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ME": [
      "en"
    ],
    "YE": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MD": [
      "en"
    ],
    "MQ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MN": [
      "en"
    ],
    "ML": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "MK": [
      "en"
    ],
    "VG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "VE": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "MS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "VC": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "VA": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "MR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "WS": [
      "en"
    ],
    "WF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "VU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "VN": [
      "en"
    ],
    "ET": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "FI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ER": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ES": [
      "es",
      "en"
    ],
    "EE": [
      "en",
      "ru",
      "fr",
      "es",
      "zh"
    ],
    "EG": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "DZ": [
      "ar",
      "en",
      "fr",
      "es",
      "zh"
    ],
    "EC": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "FJ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "FK": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ZM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PN": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ZA": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PH": [
      "en"
    ],
    "AE": [
      "en",
      "fr",
      "es",
      "zh",
      "ar"
    ],
    "PL": [
      "pl",
      "en"
    ],
    "AD": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "ZW": [
      "en"
    ],
    "AO": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PF": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AN": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "AM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "PA": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "AL": [
      "en"
    ],
    "PE": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "AT": [
      "de",
      "en"
    ],
    "AR": [
      "es",
      "en"
    ],
    "PT": [
      "pt",
      "en"
    ],
    "PW": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BJ": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "BO": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "BN": [
      "en"
    ],
    "BS": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BR": [
      "pt",
      "en"
    ],
    "BW": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "BT": [
      "en"
    ],
    "BZ": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "BY": [
      "en"
    ],
    "TD": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "UZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "VI": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TC": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TH": [
      "th",
      "en"
    ],
    "TR": [
      "tr",
      "en"
    ],
    "UM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TG": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "ST": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "YU": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SZ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "SV": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "ZR": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TM": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "TJ": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "C2": [
      "zh",
      "en"
    ],
    "CA": [
      "en",
      "fr"
    ],
    "CD": [
      "fr",
      "en",
      "es",
      "zh"
    ],
    "CG": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CH": [
      "de",
      "fr",
      "en"
    ],
    "CI": [
      "fr",
      "en"
    ],
    "CK": [
      "en",
      "fr",
      "es",
      "zh"
    ],
    "CL": [
      "es",
      "en",
      "fr",
      "zh"
    ],
    "CM": [
      "fr",
      "en"
    ],
    "CN": [
      "zh"
    ]
  },
  "regions": {
    "EM": [],
    "LATAM": [
      "JM",
      "PY",
      "KY",
      "AW",
      "BB",
      "KN",
      "LC",
      "UY",
      "TT",
      "GD",
      "NI",
      "GT",
      "GY",
      "HN",
      "CR",
      "CO",
      "DO",
      "DM",
      "VG",
      "VE",
      "MS",
      "VC",
      "EC",
      "FK",
      "AI",
      "AG",
      "AN",
      "PA",
      "PE",
      "BM",
      "BO",
      "BS",
      "BZ",
      "TC",
      "SR",
      "SV",
      "CL"
    ],
    "EMEA": [
      "MT",
      "MU",
      "MW",
      "MZ",
      "NA",
      "NC",
      "NE",
      "JO",
      "HU",
      "IS",
      "SA",
      "RW",
      "RS",
      "RO",
      "RE",
      "QA",
      "SC",
      "AZ",
      "BA",
      "KZ",
      "BF",
      "BG",
      "BH",
      "KE",
      "BI",
      "KG",
      "KW",
      "KM",
      "LI",
      "LU",
      "GH",
      "LV",
      "LS",
      "LT",
      "MA",
      "TN",
      "MC",
      "UA",
      "UG",
      "TZ",
      "GF",
      "GE",
      "FO",
      "GA",
      "GL",
      "GI",
      "NG",
      "OM",
      "GW",
      "GM",
      "GN",
      "GP",
      "GR",
      "HR",
      "SJ",
      "SK",
      "SL",
      "SM",
      "SH",
      "SI",
      "SN",
      "SO",
      "DJ",
      "CZ",
      "CY",
      "CV",
      "MG",
      "YT",
      "ME",
      "YE",
      "MD",
      "MQ",
      "ML",
      "MK",
      "VA",
      "MR",
      "WF",
      "ET",
      "FI",
      "ER",
      "EE",
      "EG",
      "DZ",
      "PM",
      "ZM",
      "ZA",
      "AE",
      "AD",
      "ZW",
      "AO",
      "PF",
      "AM",
      "AL",
      "BJ",
      "BW",
      "BY",
      "TD",
      "TG",
      "ST",
      "SZ",
      "TM",
      "TJ",
      "CD",
      "CG",
      "CI",
      "CK",
      "CM"
    ],
    "APAC": [
      "MV",
      "MY",
      "ID",
      "SB",
      "KH",
      "KI",
      "KR",
      "LK",
      "LA",
      "TV",
      "TO",
      "FM",
      "NF",
      "NP",
      "NU",
      "NR",
      "NZ",
      "MH",
      "MN",
      "WS",
      "VU",
      "VN",
      "FJ",
      "PN",
      "PH",
      "PG",
      "PW",
      "BN",
      "BT"
    ]
  }
};