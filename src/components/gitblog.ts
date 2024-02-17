export class Log {
    revision = 0
    publishTime = 0

    title = ""
    cover = ""
    topics = Array<string>()
}

export class Index {
    logs = Array<Log>()

    getTopics() {
        const topics = new Map<string, Log[]>()
        for (let log of this.logs) {
            for (let topic of log.topics) {
                if (topics.get(topic) == undefined) {
                    topics.set(topic, Array<Log>())
                }
                topics.get(topic)?.push(log)
            }
        }
        return topics
    }

    getRevisions(id: number) {
        const revisions = new Array<number>
        const log = this.logs[id]

        if (log.revision != 0) {
            for (let rev of this.getRevisions(log.revision)) {
                revisions.push(rev)
            }
        }
        return revisions
    }
}

export function ParseMarkdownChapters(text: string) {
    let chapters = new Array<string>
}

export async function FetchIndex(baseurl: string) {
    return fetch(baseurl + "/index.json")
        .then(resp => resp.text())
        .then(text => JSON.parse(text))
}
