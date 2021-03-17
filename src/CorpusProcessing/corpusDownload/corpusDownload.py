import time
from urllib.request import urlopen
from urllib.request import Request
import json


def get_results(search, headers, page, stars):
    url = 'https://api.github.com/search/repositories?q={search}%20stars:<={stars}&page={num}&per_page=100&sort=stars' \
          '&order=desc'.format(search=search, num=page, stars=stars)
    req = Request(url, headers=headers)
    response = urlopen(req).read()
    result = json.loads(response.decode())
    return result


if __name__ == '__main__':
    # Specify JavaScript Repository
    search = 'language:javascript'

    # Modify the GitHub token value
    headers = {'User-Agent': 'Mozilla/5.0',
               'Authorization': 'token c90aec95de21a5ee46ee3e1e8f728f50a4ccc2c4',
               'Content-Type': 'application/json',
               'Accept': 'application/json'
               }

    count = 1
    # The highest value of JavaScript repository STAR is 321701, repository is freeCodeCamp.
    stars = 421701
    for i in range(0, 2):
        repos_list = []
        stars_list = []
        for page in range(1, 11):
            results = get_results(search, headers, page, stars)
            for item in results['items']:
                repos_list.append([count, item["name"], item["clone_url"]])
                stars_list.append(item["stargazers_count"])
                count += 1
            print(len(repos_list))
        stars = stars_list[-1]
        print(stars)
        with open("./top2000Repos.txt", "a", encoding="utf-8") as f:
            for i in range(len(repos_list)):
                f.write(str(repos_list[i][0]) + "," + repos_list[i][1] + "," + repos_list[i][2] + "\n")
        # For authenticated requests, 30 requests per minute
        # For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.
        time.sleep(60)

