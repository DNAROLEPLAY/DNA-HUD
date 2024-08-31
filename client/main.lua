QBCore = exports['qb-core']:GetCoreObject()

local playerData = nil
local hudVisible = true

-- Event when player is loaded
RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    playerData = QBCore.Functions.GetPlayerData()
    UpdateHUD()
end)

-- Event when player data is updated (handles cash, bank, and job changes)
RegisterNetEvent('QBCore:Player:SetPlayerData', function(val)
    playerData = val
    UpdateHUD()
end)

-- Function to update the HUD
function UpdateHUD()
    if hudVisible and playerData then
        SendNUIMessage({
            action = 'updateHud',
            serverId = GetPlayerServerId(PlayerId()),
            cash = playerData.money['cash'],
            bank = playerData.money['bank'],
            job = playerData.job.label
        })
    end
end

-- Command to close the HUD
RegisterCommand('closehud', function()
    hudVisible = false
    SendNUIMessage({
        action = 'hideHud'
    })
    QBCore.Functions.Notify('HUD closed. Use /openhud to reopen.', 'error')
end)

-- Command to open the HUD
RegisterCommand('openhud', function()
    hudVisible = true
    UpdateHUD()
    QBCore.Functions.Notify('HUD opened.', 'success')
end)

-- Update the HUD every 1 second
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(5000) -- Update every 5 second
        if hudVisible and playerData then
            UpdateHUD()
        end
    end
end)
