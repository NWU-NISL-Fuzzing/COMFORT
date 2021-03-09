def get_version(testbed: str):
    path = [e for e in testbed.split(" ") if e.find("/") > -1][0]
    full_name = path.split("/")[-1]
    return full_name.replace(".jar", "")


def parse_engine_name(testbed: str):
    return get_version(testbed).split("-")[0]

