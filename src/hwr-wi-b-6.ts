import {HwrCalendarFormat} from "./EventModel";

export const dummyData: HwrCalendarFormat = {
    "vcalendar": [
        {
            "prodid": "-//www.sked.de//EN",
            "x-sked-version-terminsync": "3.0",
            "x-sked-sync-dtstart": "20200203T000000",
            "x-sked-sync-dtend": "20200427T000000",
            "x-sked-lizenznehmer": "22",
            "x-sked-ressource": "9286",
            "version": "2.0",
            "vtimezone": [
                {
                    "tzid": "Europe/Berlin",
                    "daylight": [
                        {
                            "tzname": "CEST",
                            "dtstart": "19960101T020000",
                            "rrule": {
                                "freq": "YEARLY",
                                "bymonth": "3",
                                "byday": "-1SU"
                            },
                            "tzoffsetfrom": "+0100",
                            "tzoffsetto": "+0200"
                        }
                    ],
                    "standard": [
                        {
                            "tzname": "CET",
                            "dtstart": "19960101T020000",
                            "rrule": "FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
                            "tzoffsetfrom": "+0200",
                            "tzoffsetto": "+0100"
                        }
                    ]
                }
            ],
            vevent: [
                {
                    dtstamp: "20200202T201126Z",
                    transp: "OPAQUE",
                    sequence: "0",
                    uid: "sked.de937323",
                    summary: "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    location: "CL: 6B.368 (WIL3)",
                    description: "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    dtstart:
                        "20200203T094500",
                    dtend: "20200203T111500",
                    priority: "5",
                    class: "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937325",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200203T113000",
                    "dtend": "20200203T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942218",
                    "summary": "I\\;Infoveranstaltung Bachelor-Thesis\\;Heydeck\\, Prof. Dr. Linz",
                    "location": "CL: 5.0002",
                    "description": "Art: I\\nVeranstaltung: Infoveranstaltung Bachelor-Thesis\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Heydeck\\, Prof. Dr. Linz\\nRaum: CL: 5.0002",
                    "dtstart":
                        "20200203T130000",
                    "dtend": "20200203T140000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942219",
                    "summary": "I\\;Klausureinsicht\\;Affeldt",
                    "location": "CL: 5.0003",
                    "description": "Art: I\\nVeranstaltung: Klausureinsicht\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Affeldt\\nRaum: CL: 5.0003",
                    "dtstart":
                        "20200203T140000",
                    "dtend": "20200203T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942220",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200204T080000",
                    "dtend": "20200204T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937005",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200204T151500",
                    "dtend": "20200204T211500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de916713",
                    "summary": "P\\;Zusatzfach AdA\\;Hechel",
                    "location": "CL: 6B.354",
                    "description": "Art: P\\nVeranstaltung: Zusatzfach AdA\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Hechel\\nRaum: CL: 6B.354",
                    "dtstart":
                        "20200205T080000",
                    "dtend": "20200205T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de916714",
                    "summary": "P\\;Zusatzfach AdA\\;Hechel",
                    "location": "CL: 6B.354",
                    "description": "Art: P\\nVeranstaltung: Zusatzfach AdA\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Hechel\\nRaum: CL: 6B.354",
                    "dtstart":
                        "20200206T080000",
                    "dtend": "20200206T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937411",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200207T090000",
                    "dtend": "20200207T103000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937413",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200207T104500",
                    "dtend": "20200207T121500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943230",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200207T130000",
                    "dtend": "20200207T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943232",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200207T144500",
                    "dtend": "20200207T161500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943234",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200207T163000",
                    "dtend": "20200207T180000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933073",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200210T080000",
                    "dtend": "20200210T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937335",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200210T140000",
                    "dtend": "20200210T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937337",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200210T154500",
                    "dtend": "20200210T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942221",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200211T080000",
                    "dtend": "20200211T140000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937191",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200211T090000",
                    "dtend": "20200211T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937006",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200211T151500",
                    "dtend": "20200211T203000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943236",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200212T100000",
                    "dtend": "20200212T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943238",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200212T114500",
                    "dtend": "20200212T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943240",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200212T134500",
                    "dtend": "20200212T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943242",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200212T153000",
                    "dtend": "20200212T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937423",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200213T140000",
                    "dtend": "20200213T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937425",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200213T154500",
                    "dtend": "20200213T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937426",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200213T163000",
                    "dtend": "20200213T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933077",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200214T140000",
                    "dtend": "20200214T181500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933074",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200217T080000",
                    "dtend": "20200217T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937343",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200217T140000",
                    "dtend": "20200217T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937345",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200217T154500",
                    "dtend": "20200217T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942222",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200218T080000",
                    "dtend": "20200218T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937196",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200218T090000",
                    "dtend": "20200218T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937007",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200218T151500",
                    "dtend": "20200218T211500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943244",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200219T100000",
                    "dtend": "20200219T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943246",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200219T114500",
                    "dtend": "20200219T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943248",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200219T134500",
                    "dtend": "20200219T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943250",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200219T153000",
                    "dtend": "20200219T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937431",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200220T140000",
                    "dtend": "20200220T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937433",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200220T154500",
                    "dtend": "20200220T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937434",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200220T163000",
                    "dtend": "20200220T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933078",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200221T140000",
                    "dtend": "20200221T181500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933075",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200224T080000",
                    "dtend": "20200224T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943252",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.371 (L3)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.371 (L3)",
                    "dtstart":
                        "20200224T140000",
                    "dtend": "20200224T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943254",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.371 (L3)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.371 (L3)",
                    "dtstart":
                        "20200224T154500",
                    "dtend": "20200224T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942223",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200225T080000",
                    "dtend": "20200225T140000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937192",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200225T090000",
                    "dtend": "20200225T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937008",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200225T151500",
                    "dtend": "20200225T203000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937351",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200226T140000",
                    "dtend": "20200226T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937353",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200226T154500",
                    "dtend": "20200226T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937439",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200227T140000",
                    "dtend": "20200227T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937441",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200227T154500",
                    "dtend": "20200227T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937442",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200227T163000",
                    "dtend": "20200227T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933079",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200228T140000",
                    "dtend": "20200228T181500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933076",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200302T080000",
                    "dtend": "20200302T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937359",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200302T140000",
                    "dtend": "20200302T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937361",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200302T154500",
                    "dtend": "20200302T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942224",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200303T080000",
                    "dtend": "20200303T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937009",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.052 (IT-L)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.052 (IT-L)",
                    "dtstart":
                        "20200303T151500",
                    "dtend": "20200303T211500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943256",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Projekttag\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: Projekttag\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200304T100000",
                    "dtend": "20200304T104500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943257",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200304T104500",
                    "dtend": "20200304T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943258",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200304T114500",
                    "dtend": "20200304T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943260",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200304T134500",
                    "dtend": "20200304T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943262",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200304T153000",
                    "dtend": "20200304T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943264",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200304T171500",
                    "dtend": "20200304T184500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943266",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Projekttag\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: Projekttag\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200305T100000",
                    "dtend": "20200305T104500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943267",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200305T104500",
                    "dtend": "20200305T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943268",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200305T114500",
                    "dtend": "20200305T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943270",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200305T134500",
                    "dtend": "20200305T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943272",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200305T153000",
                    "dtend": "20200305T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943274",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200305T171500",
                    "dtend": "20200305T184500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933080",
                    "summary": "SU\\;WI-201Vert.BI-Data Warehouse\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Data Warehouse\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200306T140000",
                    "dtend": "20200306T181500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943276",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Projekttag\\;Koschnick",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: Projekttag\\nDozent: Koschnick\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200307T100000",
                    "dtend": "20200307T104500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943277",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200307T104500",
                    "dtend": "20200307T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943278",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200307T114500",
                    "dtend": "20200307T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943280",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200307T134500",
                    "dtend": "20200307T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943282",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200307T153000",
                    "dtend": "20200307T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943284",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200307T171500",
                    "dtend": "20200307T184500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933098",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200309T113000",
                    "dtend": "20200309T150000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942225",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200310T080000",
                    "dtend": "20200310T140000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937193",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200310T090000",
                    "dtend": "20200310T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937010",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.052 (IT-L)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.052 (IT-L)",
                    "dtstart":
                        "20200310T151500",
                    "dtend": "20200310T203000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937363",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200311T094500",
                    "dtend": "20200311T111500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937365",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200311T113000",
                    "dtend": "20200311T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de884495",
                    "summary": "I\\;Tag des Dualen Studiums\\;",
                    "location": "",
                    "description": "Art: I\\nVeranstaltung: Tag des Dualen Studiums\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: -\\nRaum: -",
                    "dtstart":
                        "20200312T120000",
                    "dtend": "20200312T180000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933099",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200313T113000",
                    "dtend": "20200313T150000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933160",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200316T151500",
                    "dtend": "20200316T183000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942226",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200317T080000",
                    "dtend": "20200317T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937194",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200317T090000",
                    "dtend": "20200317T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937011",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.052 (IT-L)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.052 (IT-L)",
                    "dtstart":
                        "20200317T151500",
                    "dtend": "20200317T211500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943286",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200318T100000",
                    "dtend": "20200318T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943288",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200318T114500",
                    "dtend": "20200318T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943290",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200318T134500",
                    "dtend": "20200318T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943292",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200318T153000",
                    "dtend": "20200318T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937375",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200319T140000",
                    "dtend": "20200319T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937377",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200319T154500",
                    "dtend": "20200319T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937378",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200319T163000",
                    "dtend": "20200319T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933161",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200320T080000",
                    "dtend": "20200320T111500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de884493",
                    "summary": "Klausur\\;LCCI-Prfung\\;fakultatives Angebot einer zertifizierten Englisch-Prfung der Londoner Industrie- und Handelskammer\\; weitere Informationen ber business weg gmbh\\; Anmeldung unter http://www.businessweg.de\\;N_N (angest.)",
                    "location": "",
                    "description": "Art: Klausur\\nVeranstaltung: LCCI-Prfung\\nVeranstaltungsuntergruppe: -\\nAnmerkung: fakultatives Angebot einer zertifizierten Englisch-Prfung der Londoner Industrie- und Handelskammer\\; weitere Informationen ber business weg gmbh\\; Anmeldung unter http://www.businessweg.de\\nDozent: N_N (angest.)\\nRaum: -",
                    "dtstart":
                        "20200321T090000",
                    "dtend": "20200321T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933162",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200323T080000",
                    "dtend": "20200323T111500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943294",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200323T120000",
                    "dtend": "20200323T133000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943296",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200323T134500",
                    "dtend": "20200323T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943298",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200323T153000",
                    "dtend": "20200323T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942227",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200324T080000",
                    "dtend": "20200324T140000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937195",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200324T090000",
                    "dtend": "20200324T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937012",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.052 (IT-L)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.052 (IT-L)",
                    "dtstart":
                        "20200324T151500",
                    "dtend": "20200324T203000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937197",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200325T090000",
                    "dtend": "20200325T120000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937383",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200325T130000",
                    "dtend": "20200325T143000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937385",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200325T144500",
                    "dtend": "20200325T161500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933163",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200327T151500",
                    "dtend": "20200327T183000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933164",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200330T113000",
                    "dtend": "20200330T150000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de942228",
                    "summary": "SI\\;WI-403-11Mmt. d. Inf.sicherh.\\;inkl. Klausurvorbereitung\\;Prof. Dr. Ringhand",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: SI\\nVeranstaltung: WI-403-11Mmt. d. Inf.sicherh.\\nVeranstaltungsuntergruppe: -\\nAnmerkung: inkl. Klausurvorbereitung\\nDozent: Prof. Dr. Ringhand\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200331T080000",
                    "dtend": "20200331T141500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de935138",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200331T090000",
                    "dtend": "20200331T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937013",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200331T151500",
                    "dtend": "20200331T211500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de935139",
                    "summary": "SI\\;WI-403-13 Wpff. IT-DLM\\;Prof. Dr. Lemke",
                    "location": "CL: 6B.454",
                    "description": "Art: SI\\nVeranstaltung: WI-403-13 Wpff. IT-DLM\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Lemke\\nRaum: CL: 6B.454",
                    "dtstart":
                        "20200401T090000",
                    "dtend": "20200401T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943300",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200402T100000",
                    "dtend": "20200402T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943302",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200402T114500",
                    "dtend": "20200402T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937391",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200402T140000",
                    "dtend": "20200402T153000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937393",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200402T154500",
                    "dtend": "20200402T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de933166",
                    "summary": "SU\\;WI-201Vert.BI-Inform.Retrieval\\;inkl. Klausurvorbereitung\\;Witte",
                    "location": "CL: 6B.368 (WIL3)",
                    "description": "Art: SU\\nVeranstaltung: WI-201Vert.BI-Inform.Retrieval\\nVeranstaltungsuntergruppe: -\\nAnmerkung: inkl. Klausurvorbereitung\\nDozent: Witte\\nRaum: CL: 6B.368 (WIL3)",
                    "dtstart":
                        "20200403T130000",
                    "dtend": "20200403T171500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943304",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.370 (L2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.370 (L2)",
                    "dtstart":
                        "20200406T100000",
                    "dtend": "20200406T113000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943306",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.370 (L2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.370 (L2)",
                    "dtstart":
                        "20200406T114500",
                    "dtend": "20200406T131500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943308",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.370 (L2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.370 (L2)",
                    "dtstart":
                        "20200406T134500",
                    "dtend": "20200406T151500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de943310",
                    "summary": "SU\\;WI-205 Mmt. komplexer Anwend.systeme\\;Koschnick",
                    "location": "CL: 6B.370 (L2)",
                    "description": "Art: SU\\nVeranstaltung: WI-205 Mmt. komplexer Anwend.systeme\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Koschnick\\nRaum: CL: 6B.370 (L2)",
                    "dtstart":
                        "20200406T153000",
                    "dtend": "20200406T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937014",
                    "summary": "PC\\;WI-403-12 Progr. v. Webanwendungen\\;Knuth",
                    "location": "CL: 6B.153 (L)",
                    "description": "Art: PC\\nVeranstaltung: WI-403-12 Progr. v. Webanwendungen\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Knuth\\nRaum: CL: 6B.153 (L)",
                    "dtstart":
                        "20200407T151500",
                    "dtend": "20200407T211500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937395",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200408T094500",
                    "dtend": "20200408T111500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937397",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.367 (WIL2)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.367 (WIL2)",
                    "dtstart":
                        "20200408T113000",
                    "dtend": "20200408T130000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937407",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200409T131500",
                    "dtend": "20200409T144500",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de937409",
                    "summary": "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
                    "location": "CL: 6B.372 (WIL1)",
                    "description": "Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.372 (WIL1)",
                    "dtstart":
                        "20200409T150000",
                    "dtend": "20200409T163000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de884491",
                    "summary": "Prfung\\;402 Wahlpflichtfach II\\;Prof. Dr. Krger\\, N_N (angest.)\\, Prof. Dr. Nastansky",
                    "location": "CL: 6B.370 (L2)\\, CL: 6B.371 (L3)",
                    "description": "Art: Prfung\\nVeranstaltung: 402 Wahlpflichtfach II\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Krger\\, N_N (angest.)\\, Prof. Dr. Nastansky\\nRaum: CL: 6B.370 (L2)\\, CL: 6B.371 (L3)",
                    "dtstart":
                        "20200414T090000",
                    "dtend": "20200414T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                },
                {
                    "dtstamp": "20200202T201126Z",
                    "transp": "OPAQUE",
                    "sequence": "0",
                    "uid": "sked.de884492",
                    "summary": "Prfung\\;402 Wahlpflichtfach II\\;N_N (angest.)",
                    "location": "CL: 6B.369 (L1)\\, CL: 6B.370 (L2)\\, CL: 6B.371 (L3)",
                    "description": "Art: Prfung\\nVeranstaltung: 402 Wahlpflichtfach II\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: N_N (angest.)\\nRaum: CL: 6B.369 (L1)\\, CL: 6B.370 (L2)\\, CL: 6B.371 (L3)",
                    "dtstart":
                        "20200421T090000",
                    "dtend": "20200421T170000",
                    "priority": "5",
                    "class": "PUBLIC"
                }
            ]
        }
    ]
};
