export interface MyEvent {
    dtstamp: string, //"20200202T201126Z",
    transp: string // "OPAQUE",
    sequence: number | string,
    uid: string, //"sked.de937323",
    summary: string //"PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
    location: string //"CL: 6B.368 (WIL3)",
    description: {
        art: string,
        veranstaltung: string,
        prof: string,
        room: string
    } | string //"Art: PC\\nVeranstaltung: WI-204 Vert.- E-Business\\nVeranstaltungsuntergruppe: -\\nAnmerkung: -\\nDozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
    dtstart: string, //"20200203T094500",
    dtend: string, //"20200203T111500",
    priority: number | string,
    class: string // "PUBLIC"
}

export interface HwrCalendarFormat {
    vcalendar: {
        prodid: string
        "x-sked-version-terminsync": string,
        "x-sked-sync-dtstart": string,
        "x-sked-sync-dtend": string,
        "x-sked-lizenznehmer": string,
        "x-sked-ressource": string,
        version: string,
        vtimezone: [
            {
                tzid: string,
                daylight: [
                    {
                        tzname: string,
                        dtstart: string,
                        rrule: {
                            freq: string,
                            bymonth: number | string,
                            byday: string
                        },
                        tzoffsetfrom: string,
                        tzoffsetto: string
                    }
                ],
                standard: [{
                    tzname: string,
                    dtstart: string,
                    rrule: string,
                    tzoffsetfrom: string,
                    tzoffsetto: string,

                }]
            }
        ],
        vevent: MyEvent[]
    }
}