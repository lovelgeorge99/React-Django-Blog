import re
def slugify(url):
    url = re.sub('[^a-zA-Z0-9 ]', '', url)
    slug = url.lower().replace(' ', '-')
    return slug


