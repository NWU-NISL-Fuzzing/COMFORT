import json
import pathlib


def init_config(config_path: str = "/root/result/config.json"):
    if not pathlib.Path(config_path).is_file():
        raise Exception(f"Configuration file not exist: {pathlib.Path(config_path).absolute().resolve()}")
    with open(config_path, "r") as f:
        return json.load(f)
