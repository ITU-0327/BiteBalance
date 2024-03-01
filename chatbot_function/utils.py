from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
import os
from typing import List


def get_secret(secret_name: str) -> str:
    """
    Retrieves the value of a secret from Azure Key Vault.

    This function requires an environment variable `KEY_VAULT_NAME` to be set, which is the name of the Key Vault
    from which to fetch the secret.
    For local development, this can be set in `local.settings.json`.
    For production use Settings/Configuration in Function App.

    Args:
        secret_name (str): The name of the secret to retrieve.

    Returns:
        str: The value of the retrieved secret.
    """

    key_vault_name = os.environ["KEY_VAULT_NAME"]
    key_vault_uri = f"https://{key_vault_name}.vault.azure.net/"

    # Authenticate using the default Azure credential method.
    credential = DefaultAzureCredential()
    client = SecretClient(vault_url=key_vault_uri, credential=credential)

    retrieved_secret = client.get_secret(secret_name)

    return retrieved_secret.value


def isEnglish(language: str) -> bool:
    return language == 'en'
