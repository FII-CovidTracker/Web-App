import LOCALE from './locale'

function translation() {
    const translation : {
        [key: string]: any,
    } = {
        about: {
            [LOCALE.RO]: 'Despre',
            [LOCALE.EN]: 'About',
            slug: {
                [LOCALE.RO]: 'despre',
                [LOCALE.EN]: 'about',
            }
        },
        article: {
            more: {
                [LOCALE.RO]: 'Citește totul',
                [LOCALE.EN]: 'Read more'
            }
        },
        footer: {
            madeWith: [
                {
                    [LOCALE.RO]: 'Făcut cu',
                    [LOCALE.EN]: 'Made with'
                },
                {
                    [LOCALE.RO]: 'în',
                    [LOCALE.EN]: 'in'
                }
            ],
            development: {
                [LOCALE.RO]: 'Dezvoltare proiect',
                [LOCALE.EN]: 'Project development'
            }
        },
        header: {
            title: {
                [LOCALE.RO]: ['Covid', 'Tracker'],
                [LOCALE.EN]: ['Covid', 'Tracker']
            },
            more: {
                [LOCALE.RO]: 'Mai multe',
                [LOCALE.EN]: 'More'
            },
            search: {
                [LOCALE.RO]: 'Caută',
                [LOCALE.EN]: 'Search'
            },
            connect: {
                [LOCALE.RO]: 'Conectează-te!',
                [LOCALE.EN]: 'Join!'
            },
            settings: {
                [LOCALE.RO]: 'Preferințe',
                [LOCALE.EN]: 'Preferences'
            }
        },
        home: {
            [LOCALE.RO]: 'Acasă',
            [LOCALE.EN]: 'Home',
            slug: {
                [LOCALE.RO]: '',
                [LOCALE.EN]: '',
            }
        },
        intro: {
            user: {
                [LOCALE.RO]: 'Sunt un Utilizator',
                [LOCALE.EN]: 'I am a User',
                advice: {
                    [LOCALE.RO]: 'Descarcă aplicația noastră pentru a te proteja împotriva noului Coronavirus.',
                    [LOCALE.EN]: 'Download our tracking application in order to protect yourself against the new Coronavirus.'
                }
            },
            authority: {
                [LOCALE.RO]: 'Reprezint o Autoritate',
                [LOCALE.EN]: 'I am an Authority',
                advice: {
                    [LOCALE.RO]: 'Folosiți acest portal web pentru a adăuga știri și alte informații importante pentru protecția cetățenilor!',
                    [LOCALE.EN]: 'Use this web-portal to add reliable news and information for the protection of citizens!'
                },
                accessPortal: {
                    [LOCALE.RO]: 'Accesează portalul',
                    [LOCALE.EN]: 'Access the portal'
                }
            }
        },
        language: {
            [LOCALE.RO]: 'Română',
            [LOCALE.EN]: 'English',
        },
        login: {
            [LOCALE.RO]: 'Conectează-te',
            [LOCALE.EN]: 'Login'
        },
        news: {
            [LOCALE.RO]: 'Noutăți',
            [LOCALE.EN]: 'News',
            slug: {
                [LOCALE.RO]: 'noutati',
                [LOCALE.EN]: 'news',
            }
        },
        password: {
            [LOCALE.RO]: 'Parolă',
            [LOCALE.EN]: 'Password'
        },
        portal: {
            [LOCALE.RO]: 'Portalul dedicat autorităților',
            [LOCALE.EN]: 'Authorities portal'
        },
        title: {
            [LOCALE.RO]: 'FII-CovidTracker',
            [LOCALE.EN]: 'FII-CovidTracker'
        },
        username: {
            [LOCALE.RO]: 'Nume de utilizator',
            [LOCALE.EN]: 'Username'
        }
    }

    for (const key in translation) {
        if (!translation[key].slug) continue
        for (const lang of Object.keys(translation[key].slug)) {
            const slug = translation[key].slug[lang]
            translation[key].slug[lang] = `/${translation[key].slug[lang]}`
            if (lang === LOCALE.EN) continue

            translation[key].slug[lang] = `/${lang}` + (slug.length > 1 ? `${translation[key].slug[lang]}` : '')
        }
    }

    return translation
}

const TRANSLATION = translation()

export default TRANSLATION