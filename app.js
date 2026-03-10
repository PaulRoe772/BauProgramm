const STORAGE_KEY = "bautagebuch-pro-v1";
const CLOUD_CONFIG_KEY = "bautagebuch-pro-cloud-config-v1";
const CLOUD_SYNC_META_KEY = "bautagebuch-pro-cloud-sync-meta-v1";
const CLOUD_TABLE = "app_state";
const CLOUD_STORAGE_BUCKET = "bau-files";
const DEFAULT_PHOTO_FOLDER_ID = "folder-default";
const DEFAULT_PHOTO_FOLDER_NAME = "Allgemein";
const state = {
  projects: [],
  activeProjectId: "",
  auth: {
    users: [],
    activeUserKey: "",
  },
};

const el = {
  authView: document.getElementById("authView"),
  menuView: document.getElementById("menuView"),
  bautagebuchView: document.getElementById("bautagebuchView"),
  photoModuleView: document.getElementById("photoModuleView"),
  workTimesView: document.getElementById("workTimesView"),
  sessionLabel: document.getElementById("sessionLabel"),
  saveIndicator: document.getElementById("saveIndicator"),
  logoutBtn: document.getElementById("logoutBtn"),
  modulesWrap: document.getElementById("modulesWrap"),
  projectSetupStatus: document.getElementById("projectSetupStatus"),
  loginUsername: document.getElementById("loginUsername"),
  loginPassword: document.getElementById("loginPassword"),
  loginBtn: document.getElementById("loginBtn"),
  authStatus: document.getElementById("authStatus"),
  registerUsername: document.getElementById("registerUsername"),
  registerPassword: document.getElementById("registerPassword"),
  registerRole: document.getElementById("registerRole"),
  registerCodeHint: document.getElementById("registerCodeHint"),
  registerBtn: document.getElementById("registerBtn"),
  registerStatus: document.getElementById("registerStatus"),
  openBautagebuchBtn: document.getElementById("openBautagebuchBtn"),
  openPhotoModuleBtn: document.getElementById("openPhotoModuleBtn"),
  openWorkTimesBtn: document.getElementById("openWorkTimesBtn"),
  backToMenuBtn: document.getElementById("backToMenuBtn"),
  backToMenuFromPhotoBtn: document.getElementById("backToMenuFromPhotoBtn"),
  backToMenuFromTimesBtn: document.getElementById("backToMenuFromTimesBtn"),
  photoModuleProjectBadge: document.getElementById("photoModuleProjectBadge"),
  workTimesProjectBadge: document.getElementById("workTimesProjectBadge"),
  projectSelect: document.getElementById("projectSelect"),
  newProjectBtn: document.getElementById("newProjectBtn"),
  projectName: document.getElementById("projectName"),
  siteManager: document.getElementById("siteManager"),
  projectNumber: document.getElementById("projectNumber"),
  saveProjectBtn: document.getElementById("saveProjectBtn"),
  cloudSupabaseUrl: document.getElementById("cloudSupabaseUrl"),
  cloudSupabaseAnonKey: document.getElementById("cloudSupabaseAnonKey"),
  cloudWorkspaceKey: document.getElementById("cloudWorkspaceKey"),
  cloudCredentialsWrap: document.getElementById("cloudCredentialsWrap"),
  cloudConnectBtn: document.getElementById("cloudConnectBtn"),
  cloudLoadBtn: document.getElementById("cloudLoadBtn"),
  cloudSyncBtn: document.getElementById("cloudSyncBtn"),
  cloudStatus: document.getElementById("cloudStatus"),
  newEntryBtn: document.getElementById("newEntryBtn"),
  entryList: document.getElementById("entryList"),
  overviewTotalReports: document.getElementById("overviewTotalReports"),
  overviewSavedReports: document.getElementById("overviewSavedReports"),
  overviewDraftReports: document.getElementById("overviewDraftReports"),
  overviewMonthFilter: document.getElementById("overviewMonthFilter"),
  overviewLastSaved: document.getElementById("overviewLastSaved"),
  overviewDaysList: document.getElementById("overviewDaysList"),
  manageDateDelete: document.getElementById("manageDateDelete"),
  deleteDateReportsBtn: document.getElementById("deleteDateReportsBtn"),
  deleteDraftReportsBtn: document.getElementById("deleteDraftReportsBtn"),
  manageReportsStatus: document.getElementById("manageReportsStatus"),
  statusBadge: document.getElementById("statusBadge"),
  printProjectName: document.getElementById("printProjectName"),
  printProjectNumber: document.getElementById("printProjectNumber"),
  printSiteManager: document.getElementById("printSiteManager"),
  printEntryDate: document.getElementById("printEntryDate"),
  printWeather: document.getElementById("printWeather"),
  printGeneratedAt: document.getElementById("printGeneratedAt"),
  printReport: document.getElementById("printReport"),
  entryDate: document.getElementById("entryDate"),
  weather: document.getElementById("weather"),
  workers: document.getElementById("workers"),
  companyNameInput: document.getElementById("companyNameInput"),
  companyTradeInput: document.getElementById("companyTradeInput"),
  companyContactInput: document.getElementById("companyContactInput"),
  companyCountInput: document.getElementById("companyCountInput"),
  companyEmployeeNameInput: document.getElementById("companyEmployeeNameInput"),
  companyShiftStartInput: document.getElementById("companyShiftStartInput"),
  companyShiftEndInput: document.getElementById("companyShiftEndInput"),
  companyShiftBreakInput: document.getElementById("companyShiftBreakInput"),
  companyNameSuggestions: document.getElementById("companyNameSuggestions"),
  companyTradeSuggestions: document.getElementById("companyTradeSuggestions"),
  companyContactSuggestions: document.getElementById("companyContactSuggestions"),
  companyEmployeeSuggestions: document.getElementById("companyEmployeeSuggestions"),
  addCompanyWorkerBtn: document.getElementById("addCompanyWorkerBtn"),
  companyWorkersList: document.getElementById("companyWorkersList"),
  workStartTime: document.getElementById("workStartTime"),
  workEndTime: document.getElementById("workEndTime"),
  workBreakMinutes: document.getElementById("workBreakMinutes"),
  workShiftType: document.getElementById("workShiftType"),
  workLocationDetail: document.getElementById("workLocationDetail"),
  workItemLocationInput: document.getElementById("workItemLocationInput"),
  workItemDescriptionInput: document.getElementById("workItemDescriptionInput"),
  workItemQuantityInput: document.getElementById("workItemQuantityInput"),
  addWorkItemBtn: document.getElementById("addWorkItemBtn"),
  workItemsList: document.getElementById("workItemsList"),
  workDone: document.getElementById("workDone"),
  workQuantities: document.getElementById("workQuantities"),
  issues: document.getElementById("issues"),
  nextSteps: document.getElementById("nextSteps"),
  materialDeliveries: document.getElementById("materialDeliveries"),
  equipmentUsed: document.getElementById("equipmentUsed"),
  siteVisitors: document.getElementById("siteVisitors"),
  todoInput: document.getElementById("todoInput"),
  addTodoBtn: document.getElementById("addTodoBtn"),
  todoList: document.getElementById("todoList"),
  entryPhotoInput: document.getElementById("entryPhotoInput"),
  entryCameraInput: document.getElementById("entryCameraInput"),
  entryPhotoGrid: document.getElementById("entryPhotoGrid"),
  photoFolderInput: document.getElementById("photoFolderInput"),
  addPhotoFolderBtn: document.getElementById("addPhotoFolderBtn"),
  deletePhotoFolderBtn: document.getElementById("deletePhotoFolderBtn"),
  photoFolderSelect: document.getElementById("photoFolderSelect"),
  photoInput: document.getElementById("photoInput"),
  cameraInput: document.getElementById("cameraInput"),
  exportPhotoFolderPdfBtn: document.getElementById("exportPhotoFolderPdfBtn"),
  photoFolderPdfStatus: document.getElementById("photoFolderPdfStatus"),
  photoGrid: document.getElementById("photoGrid"),
  workTimeDate: document.getElementById("workTimeDate"),
  workTimeStart: document.getElementById("workTimeStart"),
  workTimeEnd: document.getElementById("workTimeEnd"),
  workTimeName: document.getElementById("workTimeName"),
  workTimeCompany: document.getElementById("workTimeCompany"),
  workTimeBreak: document.getElementById("workTimeBreak"),
  addWorkTimeBtn: document.getElementById("addWorkTimeBtn"),
  exportWorkTimesPdfBtn: document.getElementById("exportWorkTimesPdfBtn"),
  workTimeStatus: document.getElementById("workTimeStatus"),
  workTimesDaySummary: document.getElementById("workTimesDaySummary"),
  workTimesEntryCount: document.getElementById("workTimesEntryCount"),
  workTimesTableBody: document.getElementById("workTimesTableBody"),
  saveEntryBtn: document.getElementById("saveEntryBtn"),
  printBtn: document.getElementById("printBtn"),
  exportBtn: document.getElementById("exportBtn"),
  deleteBtn: document.getElementById("deleteBtn"),
  privateNotes: document.getElementById("privateNotes"),
  signatureCanvas: document.getElementById("signatureCanvas"),
  signatureSignerName: document.getElementById("signatureSignerName"),
  signatureSignerRole: document.getElementById("signatureSignerRole"),
  clearSignatureBtn: document.getElementById("clearSignatureBtn"),
  entryItemTemplate: document.getElementById("entryItemTemplate"),
  todoItemTemplate: document.getElementById("todoItemTemplate"),
};

const signaturePad = {
  ctx: null,
  drawing: false,
  pointerId: null,
  lastPoint: null,
  hasInk: false,
  renderToken: 0,
  resizeTimer: null,
};

const cloud = {
  client: null,
  url: "",
  anonKey: "",
  workspaceKey: "",
  connected: false,
  lockCredentials: false,
  autoConnect: true,
  syncTimer: null,
  syncing: false,
  wakeSyncInFlight: false,
  wakeSyncAt: 0,
  pendingLocalChanges: false,
  lastLocalChangeAt: 0,
  lastCloudPullAt: 0,
  lastCloudPushAt: 0,
};

const autoSaveDraft = {
  timer: null,
  delayMs: 650,
};

function setHidden(node, hidden) {
  if (!node) return;
  node.classList.toggle("hidden", Boolean(hidden));
}

function setFeedback(node, text = "", kind = "") {
  if (!node) return;
  node.textContent = text || "";
  node.classList.remove("error", "success");
  if (kind) node.classList.add(kind);
}

function setSaveIndicator(mode = "saved", text = "") {
  if (!el.saveIndicator) return;
  const label = String(text || "").trim();
  el.saveIndicator.textContent = label || "Gespeichert";
  el.saveIndicator.classList.remove("save-indicator-saved", "save-indicator-saving", "save-indicator-dirty");
  if (mode === "saving") {
    el.saveIndicator.classList.add("save-indicator-saving");
    return;
  }
  if (mode === "dirty") {
    el.saveIndicator.classList.add("save-indicator-dirty");
    return;
  }
  el.saveIndicator.classList.add("save-indicator-saved");
}

function normalizeWorkspaceKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9._-]/g, "");
}

function readCloudInputs() {
  return {
    url: String(el.cloudSupabaseUrl?.value || "").trim(),
    anonKey: String(el.cloudSupabaseAnonKey?.value || "").trim(),
    workspaceKey: normalizeWorkspaceKey(el.cloudWorkspaceKey?.value || ""),
  };
}

function getBundledCloudConfig() {
  const source = window.BAUTAGEBUCH_CLOUD_CONFIG || {};
  return {
    url: String(source.supabaseUrl || source.url || "").trim(),
    anonKey: String(source.supabaseAnonKey || source.anonKey || "").trim(),
    workspaceKey: normalizeWorkspaceKey(source.workspaceKey || source.projectKey || ""),
    lockCredentials: Boolean(source.lockCredentials),
    autoConnect: source.autoConnect !== false,
  };
}

function applyCloudUiMode(config = {}) {
  const hasFixedCredentials = Boolean(config.url && config.anonKey && config.workspaceKey);
  cloud.lockCredentials = Boolean(config.lockCredentials && hasFixedCredentials);
  cloud.autoConnect = config.autoConnect !== false;
  setHidden(el.cloudCredentialsWrap, cloud.lockCredentials);
}

function applyCloudInputs(config) {
  if (el.cloudSupabaseUrl) el.cloudSupabaseUrl.value = config?.url || "";
  if (el.cloudSupabaseAnonKey) el.cloudSupabaseAnonKey.value = config?.anonKey || "";
  if (el.cloudWorkspaceKey) el.cloudWorkspaceKey.value = config?.workspaceKey || "";
}

function loadCloudConfig() {
  const bundled = getBundledCloudConfig();
  try {
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    if (!raw) return bundled;
    const parsed = JSON.parse(raw);
    return {
      url: String(parsed?.url || "").trim() || bundled.url,
      anonKey: String(parsed?.anonKey || "").trim() || bundled.anonKey,
      workspaceKey: normalizeWorkspaceKey(parsed?.workspaceKey || "") || bundled.workspaceKey,
      lockCredentials: bundled.lockCredentials,
      autoConnect: bundled.autoConnect,
    };
  } catch (_) {
    return bundled;
  }
}

function saveCloudConfig(config) {
  const payload = {
    url: String(config?.url || "").trim(),
    anonKey: String(config?.anonKey || "").trim(),
    workspaceKey: normalizeWorkspaceKey(config?.workspaceKey || ""),
  };
  localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(payload));
}

function loadCloudSyncMeta() {
  try {
    const raw = localStorage.getItem(CLOUD_SYNC_META_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    cloud.pendingLocalChanges = Boolean(parsed?.pendingLocalChanges);
    cloud.lastLocalChangeAt = Number.isFinite(Number(parsed?.lastLocalChangeAt))
      ? Number(parsed.lastLocalChangeAt)
      : 0;
    cloud.lastCloudPullAt = Number.isFinite(Number(parsed?.lastCloudPullAt))
      ? Number(parsed.lastCloudPullAt)
      : 0;
    cloud.lastCloudPushAt = Number.isFinite(Number(parsed?.lastCloudPushAt))
      ? Number(parsed.lastCloudPushAt)
      : 0;
  } catch (_) {
    cloud.pendingLocalChanges = false;
    cloud.lastLocalChangeAt = 0;
    cloud.lastCloudPullAt = 0;
    cloud.lastCloudPushAt = 0;
  }
}

function saveCloudSyncMeta() {
  const payload = {
    pendingLocalChanges: Boolean(cloud.pendingLocalChanges),
    lastLocalChangeAt: Number(cloud.lastLocalChangeAt) || 0,
    lastCloudPullAt: Number(cloud.lastCloudPullAt) || 0,
    lastCloudPushAt: Number(cloud.lastCloudPushAt) || 0,
  };
  try {
    localStorage.setItem(CLOUD_SYNC_META_KEY, JSON.stringify(payload));
  } catch (_) {
    // Ignore storage errors for sync meta.
  }
}

function setCloudStatus(text = "", kind = "") {
  setFeedback(el.cloudStatus, text, kind);
}

function setCloudBusy(busy) {
  const isBusy = Boolean(busy);
  if (el.cloudConnectBtn) el.cloudConnectBtn.disabled = isBusy;
  if (el.cloudLoadBtn) el.cloudLoadBtn.disabled = isBusy || !cloud.connected;
  if (el.cloudSyncBtn) el.cloudSyncBtn.disabled = isBusy || !cloud.connected;
}

function revealCloudCredentials() {
  cloud.lockCredentials = false;
  setHidden(el.cloudCredentialsWrap, false);
}

function getCloudErrorMessage(error, fallback = "") {
  return String(error?.message || fallback || "").trim();
}

function isCloudCredentialError(error) {
  const message = getCloudErrorMessage(error).toLowerCase();
  if (!message) return false;
  return (
    /invalid api key|invalidapikey|api key|apikey/.test(message) ||
    /jwt/.test(message) ||
    /unauthorized|forbidden|permission denied/.test(message)
  );
}

function ensureCloudClient(config) {
  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    throw new Error("Supabase SDK wurde nicht geladen.");
  }
  return window.supabase.createClient(config.url, config.anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function getCloudBaseUrl() {
  const url = String(cloud.url || el.cloudSupabaseUrl?.value || "").trim();
  return url.replace(/\/+$/g, "");
}

function normalizeCloudPath(value) {
  return String(value || "")
    .trim()
    .replace(/^\/+/g, "")
    .replace(/\.\./g, "")
    .replace(/\\/g, "/");
}

function sanitizeStorageSegment(value, fallback = "item") {
  const cleaned = String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || fallback;
}

function resolveCloudFileUrl(pathValue) {
  const path = normalizeCloudPath(pathValue);
  if (!path) return "";

  if (cloud.client) {
    const { data } = cloud.client.storage.from(CLOUD_STORAGE_BUCKET).getPublicUrl(path);
    if (data?.publicUrl) return data.publicUrl;
  }

  const baseUrl = getCloudBaseUrl();
  if (!baseUrl) return "";
  const encodedPath = path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${baseUrl}/storage/v1/object/public/${CLOUD_STORAGE_BUCKET}/${encodedPath}`;
}

function getMimeTypeFromDataUrl(dataUrl) {
  const match = /^data:([^;,]+)[;,]/i.exec(String(dataUrl || ""));
  return match ? String(match[1]).toLowerCase() : "";
}

function getFileExtensionFromMimeType(mimeType) {
  const mime = String(mimeType || "").toLowerCase();
  if (mime === "image/jpeg" || mime === "image/jpg") return "jpg";
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  if (mime === "image/gif") return "gif";
  if (mime === "image/heic") return "heic";
  if (mime === "image/heif") return "heif";
  if (mime === "image/svg+xml") return "svg";
  return "bin";
}

function getDataUrlFileExtension(dataUrl) {
  return getFileExtensionFromMimeType(getMimeTypeFromDataUrl(dataUrl));
}

async function uploadDataUrlToCloud(dataUrl, path) {
  if (!cloud.client) throw new Error("Cloud-Client nicht bereit.");
  const safePath = normalizeCloudPath(path);
  if (!safePath) throw new Error("Ungültiger Speicherpfad.");
  if (!String(dataUrl || "").startsWith("data:")) {
    throw new Error("Ungültige Datei: Kein Data-URL Inhalt.");
  }

  const response = await fetch(dataUrl);
  if (!response.ok) {
    throw new Error("Datei konnte nicht gelesen werden.");
  }
  const blob = await response.blob();
  const contentType = blob.type || getMimeTypeFromDataUrl(dataUrl) || "application/octet-stream";
  const { error } = await cloud.client.storage.from(CLOUD_STORAGE_BUCKET).upload(safePath, blob, {
    upsert: true,
    contentType,
  });
  if (error) throw error;
  return safePath;
}

async function uploadPendingCloudAssets() {
  if (!cloud.connected || !cloud.client || !cloud.workspaceKey) return 0;
  let uploadCount = 0;

  for (const project of state.projects) {
    const projectId = sanitizeStorageSegment(project?.id, "project");
    const entries = Array.isArray(project?.entries) ? project.entries : [];
    const projectPhotos = Array.isArray(project?.photos) ? project.photos : [];

    for (const entry of entries) {
      const entryId = sanitizeStorageSegment(entry?.id, "entry");

      if (entry?.signatureDataUrl && !entry?.signatureCloudPath) {
        const ext = getDataUrlFileExtension(entry.signatureDataUrl);
        const signaturePath = `${cloud.workspaceKey}/projects/${projectId}/entries/${entryId}/signature.${ext}`;
        entry.signatureCloudPath = await uploadDataUrlToCloud(entry.signatureDataUrl, signaturePath);
        entry.signatureDataUrl = "";
        uploadCount += 1;
      }

      const entryPhotos = Array.isArray(entry?.photos) ? entry.photos : [];
      for (const photo of entryPhotos) {
        if (!photo?.dataUrl || photo?.cloudPath) continue;
        const photoId = sanitizeStorageSegment(photo.id || uid(), "photo");
        const ext = getDataUrlFileExtension(photo.dataUrl);
        const photoPath = `${cloud.workspaceKey}/projects/${projectId}/entries/${entryId}/photos/${photoId}.${ext}`;
        photo.cloudPath = await uploadDataUrlToCloud(photo.dataUrl, photoPath);
        photo.id = photoId;
        photo.dataUrl = "";
        uploadCount += 1;
      }
    }

    for (const photo of projectPhotos) {
      if (!photo?.dataUrl || photo?.cloudPath) continue;
      const folderId = sanitizeStorageSegment(photo.folderId || DEFAULT_PHOTO_FOLDER_ID, DEFAULT_PHOTO_FOLDER_ID);
      const photoId = sanitizeStorageSegment(photo.id || uid(), "photo");
      const ext = getDataUrlFileExtension(photo.dataUrl);
      const photoPath = `${cloud.workspaceKey}/projects/${projectId}/folders/${folderId}/${photoId}.${ext}`;
      photo.cloudPath = await uploadDataUrlToCloud(photo.dataUrl, photoPath);
      photo.id = photoId;
      photo.dataUrl = "";
      uploadCount += 1;
    }
  }

  return uploadCount;
}

function createCloudPhotoSnapshot(photo, includeFolder = false) {
  const item = {
    id: String(photo?.id || uid()),
    name: String(photo?.name || "Baufoto"),
    cloudPath: normalizeCloudPath(photo?.cloudPath || ""),
    description: String(photo?.description || ""),
    location: String(photo?.location || ""),
  };
  if (includeFolder) {
    item.folderId = String(photo?.folderId || DEFAULT_PHOTO_FOLDER_ID);
  }
  return item;
}

function createCloudEntrySnapshot(entry) {
  return {
    ...entry,
    signatureDataUrl: "",
    signatureCloudPath: normalizeCloudPath(entry?.signatureCloudPath || ""),
    photos: Array.isArray(entry?.photos)
      ? entry.photos.map((photo) => createCloudPhotoSnapshot(photo, false))
      : [],
  };
}

function createCloudProjectSnapshot(project) {
  return {
    ...project,
    entries: Array.isArray(project?.entries)
      ? project.entries.map((entry) => createCloudEntrySnapshot(entry))
      : [],
    photos: Array.isArray(project?.photos)
      ? project.photos.map((photo) => createCloudPhotoSnapshot(photo, true))
      : [],
  };
}

function getCloudPayload() {
  return {
    schemaVersion: 2,
    activeProjectId: state.activeProjectId,
    projects: state.projects.map((project) => createCloudProjectSnapshot(project)),
    savedAt: new Date().toISOString(),
  };
}

function applyCloudPayload(payload) {
  if (!payload || !Array.isArray(payload.projects)) return false;
  state.projects = payload.projects.map((project) => createProject(project));
  state.activeProjectId = String(payload.activeProjectId || "");
  ensureActiveProjectId();
  return true;
}

function refreshUiFromState() {
  syncProjectInputs();
  renderEntries();
  syncEntryInputs();
  setManageReportsStatus("");
  renderPhotoFolders();
  renderPhotos();
  syncWorkTimeInputs();
  renderWorkTimes();
  updateModuleAccessUi();
}

async function pushCloudState() {
  if (!cloud.connected || !cloud.client || !cloud.workspaceKey) return;
  if (cloud.syncing) return;
  cloud.syncing = true;
  try {
    const uploaded = await uploadPendingCloudAssets();
    if (uploaded > 0) {
      persist(true);
      refreshUiFromState();
    }
    const payload = getCloudPayload();
    const { error } = await cloud.client.from(CLOUD_TABLE).upsert(
      {
        workspace_key: cloud.workspaceKey,
        data: payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "workspace_key" }
    );
    if (error) throw error;
    cloud.pendingLocalChanges = false;
    cloud.lastCloudPushAt = Date.now();
    saveCloudSyncMeta();
    setCloudStatus("Cloud synchronisiert.", "success");
  } catch (error) {
    const message = getCloudErrorMessage(error, "Synchronisierung fehlgeschlagen.");
    if (isCloudCredentialError(error)) {
      revealCloudCredentials();
      setCloudStatus(
        "Cloud-Fehler: Ungueltiger Supabase API-Key. Bitte den kompletten Publishable/Anon Key eintragen und erneut verbinden.",
        "error"
      );
    } else if (/bucket|storage/i.test(message)) {
      setCloudStatus(
        `Cloud-Fehler: ${message} (Storage-Bucket "${CLOUD_STORAGE_BUCKET}" prüfen).`,
        "error"
      );
    } else {
      setCloudStatus(`Cloud-Fehler: ${message}`, "error");
    }
  } finally {
    cloud.syncing = false;
    setCloudBusy(false);
  }
}

function scheduleCloudSync() {
  if (!cloud.connected) return;
  if (cloud.syncTimer) {
    clearTimeout(cloud.syncTimer);
  }
  cloud.syncTimer = setTimeout(() => {
    cloud.syncTimer = null;
    setCloudBusy(true);
    void pushCloudState();
  }, 900);
}

async function loadCloudState() {
  if (!cloud.connected || !cloud.client || !cloud.workspaceKey) return false;
  setCloudBusy(true);
  try {
    const { data, error } = await cloud.client
      .from(CLOUD_TABLE)
      .select("data,updated_at")
      .eq("workspace_key", cloud.workspaceKey)
      .maybeSingle();
    if (error) throw error;

    if (!data?.data) {
      setCloudStatus("Noch keine Cloud-Daten gefunden. Lokale Daten werden jetzt hochgeladen.", "success");
      await pushCloudState();
      return false;
    }

    const previousState = {
      projects: state.projects,
      activeProjectId: state.activeProjectId,
    };
    const applied = applyCloudPayload(data.data);
    if (!applied) {
      state.projects = previousState.projects;
      state.activeProjectId = previousState.activeProjectId;
      ensureActiveProjectId();
      refreshUiFromState();
      setCloudStatus("Cloud-Datenformat ungültig.", "error");
      return false;
    }
    if (!state.projects.length) {
      state.projects = previousState.projects;
      state.activeProjectId = previousState.activeProjectId;
      ensureActiveProjectId();
      refreshUiFromState();
      setCloudStatus(
        `Cloud geladen, aber keine Baustelle gefunden (Schlüssel: ${cloud.workspaceKey}). Bitte Cloud-Projekt-Schlüssel prüfen.`,
        "error"
      );
      return false;
    }
    persist(true);
    refreshUiFromState();
    cloud.pendingLocalChanges = false;
    cloud.lastCloudPullAt = Date.now();
    saveCloudSyncMeta();
    const count = state.projects.length;
    const projectLabel = count === 1 ? "Baustelle" : "Baustellen";
    setCloudStatus(`Cloud-Daten geladen (${count} ${projectLabel}).`, "success");
    return true;
  } catch (error) {
    const message = getCloudErrorMessage(error, "Laden fehlgeschlagen.");
    if (isCloudCredentialError(error)) {
      revealCloudCredentials();
      setCloudStatus(
        "Cloud-Fehler: Ungueltiger Supabase API-Key. Bitte den kompletten Publishable/Anon Key eintragen und erneut verbinden.",
        "error"
      );
      return false;
    }
    setCloudStatus(`Cloud-Fehler: ${message}`, "error");
    return false;
  } finally {
    setCloudBusy(false);
  }
}

async function connectCloud(autoLoad = true) {
  const config = readCloudInputs();
  if (!config.url || !config.anonKey || !config.workspaceKey) {
    setCloudStatus("Bitte Supabase URL, Anon Key und Cloud-Projekt-Schlüssel ausfüllen.", "error");
    return false;
  }

  // Werte direkt speichern, damit man sie nach Fehlern nicht neu eingeben muss.
  saveCloudConfig(config);
  setCloudBusy(true);
  try {
    cloud.client = ensureCloudClient(config);
    cloud.url = config.url;
    cloud.anonKey = config.anonKey;
    cloud.workspaceKey = config.workspaceKey;
    cloud.connected = true;
    applyCloudInputs(config);
    setCloudStatus("Cloud verbunden.", "success");
    if (autoLoad) {
      if (cloud.pendingLocalChanges) {
        setCloudStatus(
          "Lokale Änderungen vorhanden. 'Jetzt synchronisieren' zum Hochladen oder 'Cloud laden' zum Überschreiben nutzen.",
          "error"
        );
        return true;
      }
      await loadCloudState();
    }
    return true;
  } catch (error) {
    if (isCloudCredentialError(error)) {
      revealCloudCredentials();
      setCloudStatus(
        "Cloud-Verbindung fehlgeschlagen: Ungueltiger Supabase API-Key. Bitte den kompletten Publishable/Anon Key eintragen.",
        "error"
      );
      return false;
    }
    cloud.client = null;
    cloud.connected = false;
    setCloudStatus(
      `Cloud-Verbindung fehlgeschlagen: ${getCloudErrorMessage(error, "Bitte Daten prüfen.")}`,
      "error"
    );
    return false;
  } finally {
    setCloudBusy(false);
  }
}

async function autoConnectCloudIfConfigured() {
  const config = loadCloudConfig();
  applyCloudInputs(config);
  applyCloudUiMode(config);
  if (!config.url || !config.anonKey || !config.workspaceKey) {
    setCloudStatus("Cloud nicht verbunden. Supabase-Daten eintragen und auf 'Cloud verbinden' klicken.");
    setCloudBusy(false);
    return;
  }
  if (!cloud.autoConnect) {
    setCloudStatus("Cloud-Zugang hinterlegt. Auf 'Cloud verbinden' klicken.");
    setCloudBusy(false);
    return;
  }
  await connectCloud(true);
}

async function syncCloudOnAppWake(force = false) {
  const now = Date.now();
  if (!force && now - Number(cloud.wakeSyncAt || 0) < 4500) return;
  if (cloud.wakeSyncInFlight) return;

  const config = loadCloudConfig();
  if (!config.url || !config.anonKey || !config.workspaceKey) return;

  cloud.wakeSyncInFlight = true;
  cloud.wakeSyncAt = now;
  try {
    applyCloudInputs(config);
    applyCloudUiMode(config);

    if (!cloud.connected) {
      const ok = await connectCloud(false);
      if (!ok) return;
    }
    if (cloud.pendingLocalChanges) {
      setCloudStatus(
        "Lokale Änderungen vorhanden. 'Jetzt synchronisieren' zum Hochladen oder 'Cloud laden' zum Überschreiben nutzen.",
        "error"
      );
      return;
    }
    await loadCloudState();
  } finally {
    cloud.wakeSyncInFlight = false;
  }
}

function normalizeUserName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizeUserKey(value) {
  return normalizeUserName(value).toLowerCase();
}

function normalizeUserRole(value) {
  return "admin";
}

function roleLabel(roleValue) {
  return "Team";
}

function updateRegisterCodeHint() {
  // Anmeldung ist deaktiviert.
}

function isMitarbeiterRole() {
  return false;
}

function applyRolePermissions() {
  const projectInputs = [el.projectName, el.siteManager, el.projectNumber];
  for (const input of projectInputs) {
    if (!input) continue;
    input.readOnly = false;
    input.classList.remove("is-readonly");
  }
  if (el.saveProjectBtn) el.saveProjectBtn.disabled = false;
  if (el.newProjectBtn) el.newProjectBtn.disabled = false;
  if (el.deleteBtn) el.deleteBtn.disabled = false;
  if (el.exportBtn) el.exportBtn.disabled = false;
}

function denyForMitarbeiter(message) {
  return false;
}

function getActiveProject() {
  return state.projects.find((project) => project.id === state.activeProjectId) || null;
}

function ensureActiveProjectId() {
  if (!state.projects.length) {
    createInitialProject();
    return getActiveProject();
  }
  const hasActive = state.projects.some((project) => project.id === state.activeProjectId);
  if (!hasActive) {
    state.activeProjectId = state.projects[0].id;
  }
  return getActiveProject();
}

function isProjectConfigured() {
  const project = ensureActiveProjectId();
  return normalizeUserName(project?.name).length > 0;
}

function getProjectDisplayName(project, fallback = "Unbenannte Baustelle") {
  if (!project) return "";
  const name = normalizeUserName(project?.name);
  return name || fallback;
}

function updatePhotoModuleBadge() {
  if (!el.photoModuleProjectBadge) return;
  const project = ensureActiveProjectId();
  if (!project) {
    el.photoModuleProjectBadge.textContent = "Keine Baustelle";
    return;
  }
  el.photoModuleProjectBadge.textContent = `Baustelle: ${getProjectDisplayName(project)}`;
}

function updateWorkTimesBadge() {
  if (!el.workTimesProjectBadge) return;
  const project = ensureActiveProjectId();
  if (!project) {
    el.workTimesProjectBadge.textContent = "Keine Baustelle";
    return;
  }
  el.workTimesProjectBadge.textContent = `Baustelle: ${getProjectDisplayName(project)}`;
}

function updateModuleAccessUi(statusText = "", statusKind = "") {
  const ready = isProjectConfigured();
  setHidden(el.modulesWrap, !ready);
  if (el.openBautagebuchBtn) el.openBautagebuchBtn.disabled = !ready;
  if (el.openPhotoModuleBtn) el.openPhotoModuleBtn.disabled = !ready;
  if (el.openWorkTimesBtn) el.openWorkTimesBtn.disabled = !ready;
  updatePhotoModuleBadge();
  updateWorkTimesBadge();

  if (!el.projectSetupStatus) return;
  if (!ready) {
    setFeedback(
      el.projectSetupStatus,
      "Bitte zuerst Baustellenname eintragen und speichern. Danach erscheinen die Module.",
      "error"
    );
    return;
  }
  if (statusText) {
    setFeedback(el.projectSetupStatus, statusText, statusKind || "success");
    return;
  }
  const project = ensureActiveProjectId();
  setFeedback(el.projectSetupStatus, `Aktive Baustelle: ${project?.name || "-"}`, "success");
}

function persistAuthUsers() {
  // Anmeldung ist deaktiviert.
}

function persistAuthSession() {
  // Anmeldung ist deaktiviert.
}

function getActiveUser() {
  return null;
}

function updateSessionUi() {
  if (el.sessionLabel) el.sessionLabel.textContent = "";
  setHidden(el.sessionLabel, true);
  setHidden(el.logoutBtn, true);
}

function showView(name) {
  setHidden(el.authView, true);
  setHidden(el.menuView, name !== "menu");
  setHidden(el.bautagebuchView, name !== "bautagebuch");
  setHidden(el.photoModuleView, name !== "photo-module");
  setHidden(el.workTimesView, name !== "work-times");
  updateSessionUi();
  applyRolePermissions();
}

function showAuthView() {
  showView("menu");
}

function showMenuView() {
  showView("menu");
  syncProjectInputs();
  updateModuleAccessUi();
}

function showBautagebuchView() {
  if (!isProjectConfigured()) {
    showMenuView();
    updateModuleAccessUi("Bitte zuerst eine Baustelle speichern.", "error");
    return;
  }
  showView("bautagebuch");
  syncProjectInputs();
  setManageReportsStatus("");
  renderEntries();
  syncEntryInputs();
  onSignatureCanvasResize();
}

function showPhotoModuleView() {
  if (!isProjectConfigured()) {
    showMenuView();
    updateModuleAccessUi("Bitte zuerst eine Baustelle speichern.", "error");
    return;
  }
  showView("photo-module");
  syncProjectInputs();
  renderPhotoFolders();
  renderPhotos();
}

function showWorkTimesView() {
  if (!isProjectConfigured()) {
    showMenuView();
    updateModuleAccessUi("Bitte zuerst eine Baustelle speichern.", "error");
    return;
  }
  showView("work-times");
  syncProjectInputs();
  syncWorkTimeInputs();
  renderWorkTimes();
}

function isBautagebuchVisible() {
  return Boolean(el.bautagebuchView && !el.bautagebuchView.classList.contains("hidden"));
}

function isPhotoModuleVisible() {
  return Boolean(el.photoModuleView && !el.photoModuleView.classList.contains("hidden"));
}

function loadAuthState() {
  state.auth.users = [];
  state.auth.activeUserKey = "";
}

function handleLogin() {
  showMenuView();
}

function handleRegister() {
  showMenuView();
}

function handleLogout() {
  showMenuView();
}

function getAutoResizeTextareas() {
  return [
    el.privateNotes,
    el.workDone,
    el.workQuantities,
    el.issues,
    el.nextSteps,
    el.materialDeliveries,
    el.equipmentUsed,
    el.siteVisitors,
  ].filter(Boolean);
}

function autoResizeTextarea(textarea) {
  if (!textarea) return;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function autoResizeAllTextareas() {
  getAutoResizeTextareas().forEach(autoResizeTextarea);
}

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createDefaultPhotoFolders() {
  return [{ id: DEFAULT_PHOTO_FOLDER_ID, name: DEFAULT_PHOTO_FOLDER_NAME }];
}

function migrateLegacyEntryPhotosToProject(project) {
  if (!project) return;
  const currentProjectPhotos = Array.isArray(project.photos) ? project.photos : [];
  if (currentProjectPhotos.length) return;
  const entries = Array.isArray(project.entries) ? project.entries : [];
  const hasLegacyFolderData = entries.some((entry) => {
    if (Array.isArray(entry?.photoFolders) && entry.photoFolders.length > 0) return true;
    return Array.isArray(entry?.photos) && entry.photos.some((photo) => String(photo?.folderId || "").trim());
  });
  if (!hasLegacyFolderData) return;

  const projectFolders = createDefaultPhotoFolders();
  const folderNameToId = new Map([[DEFAULT_PHOTO_FOLDER_NAME.toLowerCase(), DEFAULT_PHOTO_FOLDER_ID]]);
  const migrated = [];

  for (const entry of entries) {
    const legacyFolderMap = new Map();
    if (Array.isArray(entry?.photoFolders)) {
      for (const legacyFolder of entry.photoFolders) {
        const legacyId = String(legacyFolder?.id || "").trim();
        const legacyName = String(legacyFolder?.name || "").trim();
        if (!legacyId || !legacyName) continue;

        const key = legacyName.toLowerCase();
        let targetFolderId = folderNameToId.get(key);
        if (!targetFolderId) {
          targetFolderId = uid();
          folderNameToId.set(key, targetFolderId);
          projectFolders.push({ id: targetFolderId, name: legacyName });
        }
        legacyFolderMap.set(legacyId, targetFolderId);
      }
    }

    if (!Array.isArray(entry?.photos)) continue;
    for (const legacyPhoto of entry.photos) {
      const dataUrl = String(legacyPhoto?.dataUrl || "");
      if (!dataUrl) continue;
      const rawLegacyFolderId = String(legacyPhoto?.folderId || "").trim();
      const folderId = legacyFolderMap.get(rawLegacyFolderId) || DEFAULT_PHOTO_FOLDER_ID;
      migrated.push({
        id: uid(),
        name: String(legacyPhoto?.name || "Baufoto"),
        dataUrl,
        folderId,
      });
    }
  }

  if (!migrated.length) return;
  project.photoFolders = projectFolders;
  project.photos = migrated;
}

function ensureProjectMediaState(project = null) {
  const target = project || getActiveProject();
  if (!target) return;

  const rawFolders = Array.isArray(target.photoFolders) ? target.photoFolders : [];
  const folders = [];
  const usedIds = new Set();

  for (const folder of rawFolders) {
    const id = String(folder?.id || "").trim();
    const name = String(folder?.name || "").trim();
    if (!id || !name || usedIds.has(id)) continue;
    usedIds.add(id);
    folders.push({ id, name });
  }

  if (!usedIds.has(DEFAULT_PHOTO_FOLDER_ID)) {
    folders.unshift({ id: DEFAULT_PHOTO_FOLDER_ID, name: DEFAULT_PHOTO_FOLDER_NAME });
  }

  target.photoFolders = folders;
  const validFolderIds = new Set(folders.map((folder) => folder.id));

  const rawPhotos = Array.isArray(target.photos) ? target.photos : [];
  target.photos = rawPhotos
    .map((photo) => ({
      id: String(photo?.id || uid()),
      name: String(photo?.name || "Baufoto"),
      dataUrl: String(photo?.dataUrl || ""),
      cloudPath: normalizeCloudPath(photo?.cloudPath || photo?.path || ""),
      folderId: String(photo?.folderId || DEFAULT_PHOTO_FOLDER_ID),
    }))
    .filter((photo) => photo.dataUrl || photo.cloudPath);

  for (const photo of target.photos) {
    if (!validFolderIds.has(photo.folderId)) {
      photo.folderId = DEFAULT_PHOTO_FOLDER_ID;
    }
  }

  const activeFolderId = String(target.activePhotoFolderId || "");
  target.activePhotoFolderId = validFolderIds.has(activeFolderId)
    ? activeFolderId
    : DEFAULT_PHOTO_FOLDER_ID;
}

function emptyEntry() {
  return {
    id: uid(),
    date: new Date().toISOString().slice(0, 10),
    weather: "",
    workers: "",
    companyWorkers: [],
    workStartTime: "",
    workEndTime: "",
    workBreakMinutes: "",
    workShiftType: "",
    workLocationDetail: "",
    locationWorkItems: [],
    workDone: "",
    workQuantities: "",
    issues: "",
    nextSteps: "",
    materialDeliveries: "",
    equipmentUsed: "",
    siteVisitors: "",
    privateNotes: "",
    signatureSignerName: "",
    signatureSignerRole: "",
    signatureDataUrl: "",
    signatureCloudPath: "",
    todos: [],
    photos: [],
    savedAt: null,
  };
}

function normalizeLocationWorkItem(source = {}) {
  const location = String(source?.location || source?.ort || "").trim();
  const description = String(source?.description || source?.leistung || source?.work || "").trim();
  const quantity = String(source?.trade || source?.gewerk || source?.quantity || source?.menge || "").trim();
  if (!location && !description && !quantity) return null;
  return {
    id: String(source?.id || uid()),
    location,
    description,
    quantity,
  };
}

function normalizeCompanyWorkerItem(source = {}) {
  const company = normalizeUserName(source?.company || source?.name || "");
  if (!company) return null;

  const parsedCount = Math.round(Number(source?.count));
  const shiftStart = /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(source?.shiftStart || source?.start || ""))
    ? String(source.shiftStart || source.start)
    : "";
  const shiftEnd = /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(source?.shiftEnd || source?.end || ""))
    ? String(source.shiftEnd || source.end)
    : "";
  const parsedBreak = normalizeBreakMinutes(source?.shiftBreakMinutes ?? source?.breakMinutes ?? source?.break ?? "");
  return {
    id: String(source?.id || uid()),
    company,
    trade: normalizeUserName(source?.trade || source?.gewerk || ""),
    contact: normalizeUserName(source?.contact || source?.ansprechpartner || ""),
    employeeName: normalizeUserName(source?.employeeName || source?.workerName || source?.mitarbeiter || ""),
    count: Number.isFinite(parsedCount) && parsedCount > 0 ? parsedCount : 1,
    shiftStart,
    shiftEnd,
    shiftBreakMinutes: Number.isFinite(parsedBreak) && parsedBreak > 0 ? String(parsedBreak) : "",
  };
}

function formatCompanyWorkerShift(item) {
  const start = String(item?.shiftStart || "").trim();
  const end = String(item?.shiftEnd || "").trim();
  const breakMinutes = String(item?.shiftBreakMinutes || "").trim();
  if (!start && !end && !breakMinutes) return "-";
  if (!start && !end && breakMinutes) return `Pause ${breakMinutes} Min.`;
  const range = start && end ? `${start} - ${end}` : `${start || "-"} - ${end || "-"}`;
  if (!breakMinutes) return range;
  return `${range}, Pause ${breakMinutes} Min.`;
}

function getCompanyWorkerShiftDurationLabel(item) {
  const start = String(item?.shiftStart || "").trim();
  const end = String(item?.shiftEnd || "").trim();
  if (!start || !end) return "";
  const duration = getShiftDurationMinutes(start, end, normalizeBreakMinutes(item?.shiftBreakMinutes || 0));
  if (duration == null) return "";
  return `${formatHoursFromMinutes(duration)} h`;
}

function buildTradeTimeSummaryLines(companyWorkers = []) {
  if (!Array.isArray(companyWorkers) || !companyWorkers.length) return [];
  const map = new Map();

  for (const item of companyWorkers) {
    const tradeLabel = toPrintText(item?.trade, "Ohne Gewerk");
    if (!map.has(tradeLabel)) {
      map.set(tradeLabel, {
        count: 0,
        minutesTotal: 0,
        hasDuration: false,
      });
    }
    const bucket = map.get(tradeLabel);
    const workerCount = item?.employeeName ? 1 : Math.max(1, Number(item?.count || 1));
    bucket.count += workerCount;
    const duration = getShiftDurationMinutes(
      String(item?.shiftStart || ""),
      String(item?.shiftEnd || ""),
      normalizeBreakMinutes(item?.shiftBreakMinutes || 0)
    );
    if (duration != null) {
      bucket.minutesTotal += duration * workerCount;
      bucket.hasDuration = true;
    }
  }

  const lines = [];
  for (const [trade, data] of map.entries()) {
    const peopleLabel = `${data.count || 0} MA`;
    if (data.hasDuration) {
      lines.push(`${trade}: ${peopleLabel}, Summe ${formatHoursFromMinutes(data.minutesTotal)} Std.`);
    } else {
      lines.push(`${trade}: ${peopleLabel}`);
    }
  }
  return lines;
}

function getCompanyWorkersTotalMinutes(companyWorkers = []) {
  if (!Array.isArray(companyWorkers)) return 0;
  return companyWorkers.reduce((sum, item) => {
    const workerCount = item?.employeeName ? 1 : Math.max(1, Number(item?.count || 1));
    const duration = getShiftDurationMinutes(
      String(item?.shiftStart || ""),
      String(item?.shiftEnd || ""),
      normalizeBreakMinutes(item?.shiftBreakMinutes || 0)
    );
    if (duration == null) return sum;
    return sum + duration * workerCount;
  }, 0);
}

function normalizeEntryPhoto(source = {}) {
  return {
    id: String(source?.id || uid()),
    name: String(source?.name || "Baufoto"),
    dataUrl: String(source?.dataUrl || ""),
    cloudPath: normalizeCloudPath(source?.cloudPath || source?.path || ""),
    description: String(source?.description || source?.caption || ""),
    location: String(source?.location || source?.section || source?.bauabschnitt || ""),
  };
}

function normalizeEntry(source = {}) {
  const { staffAllocation, locations, ...rest } = source || {};
  return {
    ...emptyEntry(),
    ...rest,
    id: String(source?.id || uid()),
    todos: Array.isArray(source?.todos) ? source.todos : [],
    locationWorkItems: Array.isArray(source?.locationWorkItems || source?.workItems)
      ? (source.locationWorkItems || source.workItems).map((item) => normalizeLocationWorkItem(item)).filter(Boolean)
      : [],
    photos: Array.isArray(source?.photos)
      ? source.photos.map((photo) => normalizeEntryPhoto(photo)).filter((photo) => photo.dataUrl || photo.cloudPath)
      : [],
    companyWorkers: Array.isArray(source?.companyWorkers)
      ? source.companyWorkers.map((item) => normalizeCompanyWorkerItem(item)).filter(Boolean)
      : [],
    weather: String(source?.weather || "").replace(/^Bewoelkt$/i, "Bewölkt"),
    privateNotes: String(source?.privateNotes || ""),
    workStartTime: String(source?.workStartTime || source?.workStart || ""),
    workEndTime: String(source?.workEndTime || source?.workEnd || ""),
    workBreakMinutes: String(source?.workBreakMinutes ?? source?.breakMinutes ?? source?.workBreak ?? ""),
    workShiftType: String(source?.workShiftType || source?.shiftType || ""),
    workLocationDetail: String(source?.workLocationDetail || source?.workLocation || source?.location || ""),
    workQuantities: String(source?.workQuantities || source?.quantities || source?.progress || ""),
    materialDeliveries: String(source?.materialDeliveries || source?.deliveries || ""),
    equipmentUsed: String(source?.equipmentUsed || source?.equipment || source?.machines || ""),
    siteVisitors: String(source?.siteVisitors || source?.visitors || ""),
    signatureSignerName: String(source?.signatureSignerName || source?.signatureName || ""),
    signatureSignerRole: String(source?.signatureSignerRole || source?.signatureRole || ""),
    signatureDataUrl: typeof source?.signatureDataUrl === "string" ? source.signatureDataUrl : "",
    signatureCloudPath: normalizeCloudPath(source?.signatureCloudPath || source?.signaturePath || ""),
  };
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function parseTimeToMinutes(timeValue) {
  const value = String(timeValue || "").trim();
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

function normalizeBreakMinutes(value) {
  const minutes = Number(value);
  if (!Number.isFinite(minutes) || minutes < 0) return 0;
  return Math.round(minutes);
}

function getShiftDurationMinutes(startTime, endTime, breakMinutes = 0) {
  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);
  if (startMinutes == null || endMinutes == null || endMinutes <= startMinutes) return null;
  const gross = endMinutes - startMinutes;
  const pause = Math.min(Math.max(0, normalizeBreakMinutes(breakMinutes)), gross);
  const net = gross - pause;
  return net > 0 ? net : null;
}

function normalizeWorkShift(source = {}) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(source?.date || ""))
    ? String(source.date)
    : todayIsoDate();
  const start = /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(source?.start || ""))
    ? String(source.start)
    : "08:00";
  const end = /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(source?.end || ""))
    ? String(source.end)
    : "16:00";
  const breakMinutes = normalizeBreakMinutes(source?.breakMinutes ?? source?.break ?? 0);
  const duration = getShiftDurationMinutes(start, end, breakMinutes);
  if (duration == null) return null;

  return {
    id: String(source?.id || uid()),
    date,
    start,
    end,
    employee: normalizeUserName(source?.employee || source?.name || ""),
    company: normalizeUserName(source?.company || ""),
    breakMinutes,
    createdAt: String(source?.createdAt || new Date().toISOString()),
  };
}

function createProject(seed = {}) {
  const rawEntries = Array.isArray(seed.entries) ? seed.entries.map(normalizeEntry) : [];
  const entries = rawEntries.length ? rawEntries : [emptyEntry()];
  const workShifts = Array.isArray(seed.workShifts)
    ? seed.workShifts.map((item) => normalizeWorkShift(item)).filter(Boolean)
    : [];
  const project = {
    id: String(seed.id || uid()),
    name: String(seed.name || ""),
    manager: String(seed.manager || ""),
    number: String(seed.number || ""),
    entries,
    activeEntryId: String(seed.activeEntryId || seed.activeId || ""),
    photoFolders: Array.isArray(seed.photoFolders) ? seed.photoFolders : [],
    photos: Array.isArray(seed.photos) ? seed.photos : [],
    activePhotoFolderId: String(seed.activePhotoFolderId || ""),
    workShifts,
  };
  if (!project.entries.some((entry) => entry.id === project.activeEntryId)) {
    project.activeEntryId = project.entries[0].id;
  }
  migrateLegacyEntryPhotosToProject(project);
  ensureProjectMediaState(project);
  return project;
}

function createInitialProject() {
  const project = createProject();
  state.projects = [project];
  state.activeProjectId = project.id;
}

function renderProjectSelect() {
  if (!el.projectSelect) return;
  ensureActiveProjectId();
  el.projectSelect.innerHTML = "";
  for (let index = 0; index < state.projects.length; index += 1) {
    const project = state.projects[index];
    const option = document.createElement("option");
    option.value = project.id;
    const projectName = normalizeUserName(project.name);
    option.textContent = projectName || `Unbenannte Baustelle ${index + 1}`;
    option.selected = project.id === state.activeProjectId;
    el.projectSelect.appendChild(option);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      createInitialProject();
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.projects)) {
      state.projects = parsed.projects.map((project) => createProject(project));
      if (!state.projects.length) {
        createInitialProject();
        return;
      }
      state.activeProjectId = String(parsed.activeProjectId || "");
      ensureActiveProjectId();
      return;
    }

    const hasLegacyShape = parsed && (parsed.project || Array.isArray(parsed.entries));
    if (!hasLegacyShape) {
      createInitialProject();
      return;
    }

    const legacyProject = createProject({
      ...parsed.project,
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
      activeEntryId: parsed.activeId,
      photoFolders: Array.isArray(parsed.project?.photoFolders) ? parsed.project.photoFolders : [],
      photos: Array.isArray(parsed.project?.photos) ? parsed.project.photos : [],
      activePhotoFolderId: parsed.project?.activePhotoFolderId,
    });
    state.projects = [legacyProject];
    state.activeProjectId = legacyProject.id;
    ensureActiveProjectId();
  } catch (_) {
    createInitialProject();
  }
}

function persist(localOnly = false) {
  let localSaved = true;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    localSaved = false;
    const message = getCloudErrorMessage(error, "Lokales Speichern fehlgeschlagen.");
    const isQuotaError =
      error?.name === "QuotaExceededError" ||
      /quota|exceeded|storage|space/i.test(message);
    if (isQuotaError) {
      setCloudStatus(
        "Lokaler Speicher voll: Fotos werden nicht komplett lokal gespeichert. Bitte Cloud-Sync nutzen oder Fotos reduzieren.",
        "error"
      );
      setSaveIndicator("dirty", "Speicher voll");
    } else {
      setCloudStatus(`Lokaler Speicherfehler: ${message}`, "error");
      setSaveIndicator("dirty", "Nicht gespeichert");
    }
  }
  if (!localOnly) {
    cloud.pendingLocalChanges = true;
    cloud.lastLocalChangeAt = Date.now();
    saveCloudSyncMeta();
    scheduleCloudSync();
  }
  if (!autoSaveDraft.timer) {
    if (localSaved) {
      setSaveIndicator("saved", "Änderungen gespeichert");
    }
  }
  return localSaved;
}

function getActiveEntry() {
  const project = ensureActiveProjectId();
  if (!project) return null;
  return project.entries.find((entry) => entry.id === project.activeEntryId) || null;
}

function syncProjectInputs() {
  const project = ensureActiveProjectId();
  renderProjectSelect();
  if (el.projectName) el.projectName.value = project?.name || "";
  if (el.siteManager) el.siteManager.value = project?.manager || "";
  if (el.projectNumber) el.projectNumber.value = project?.number || "";
  updatePrintMeta();
  updatePhotoModuleBadge();
  updateWorkTimesBadge();
}

function resolvePhotoSource(photo) {
  const localSource = String(photo?.dataUrl || "").trim();
  if (localSource) return localSource;
  return resolveCloudFileUrl(photo?.cloudPath || "");
}

function getEntrySignatureSource(entry) {
  const localSignature = String(entry?.signatureDataUrl || "").trim();
  if (localSignature) return localSignature;
  return resolveCloudFileUrl(entry?.signatureCloudPath || "");
}

function syncEntryInputs() {
  const entry = getActiveEntry();
  if (!entry) return;

  el.entryDate.value = entry.date || "";
  el.weather.value = entry.weather || "";
  el.workers.value = entry.workers || "";
  renderCompanyWorkers(entry);
  renderCompanyWorkerSuggestions();
  if (el.workStartTime) el.workStartTime.value = entry.workStartTime || "";
  if (el.workEndTime) el.workEndTime.value = entry.workEndTime || "";
  if (el.workBreakMinutes) el.workBreakMinutes.value = entry.workBreakMinutes || "";
  if (el.workShiftType) el.workShiftType.value = entry.workShiftType || "";
  if (el.workLocationDetail) el.workLocationDetail.value = entry.workLocationDetail || "";
  renderLocationWorkItems(entry);
  if (el.workDone) el.workDone.value = entry.workDone || "";
  if (el.workQuantities) el.workQuantities.value = entry.workQuantities || "";
  el.issues.value = entry.issues || "";
  el.nextSteps.value = entry.nextSteps || "";
  if (el.materialDeliveries) el.materialDeliveries.value = entry.materialDeliveries || "";
  if (el.equipmentUsed) el.equipmentUsed.value = entry.equipmentUsed || "";
  if (el.siteVisitors) el.siteVisitors.value = entry.siteVisitors || "";
  el.privateNotes.value = entry.privateNotes || "";
  if (el.signatureSignerName) el.signatureSignerName.value = entry.signatureSignerName || "";
  if (el.signatureSignerRole) el.signatureSignerRole.value = entry.signatureSignerRole || "";
  renderSignature(getEntrySignatureSource(entry));
  autoResizeAllTextareas();
  renderTodos(entry);
  renderEntryPhotos(entry);
  updateStatus(entry.savedAt ? `Gespeichert ${fmt(entry.savedAt)}` : "Noch nicht gespeichert");
  updatePrintMeta();
  if (el.manageDateDelete) {
    el.manageDateDelete.value = entry.date || "";
  }
}

function pullInputsToActiveEntry() {
  const entry = getActiveEntry();
  if (!entry) return;

  entry.date = el.entryDate.value;
  entry.weather = el.weather.value;
  entry.workers = el.workers.value;
  if (el.workStartTime) entry.workStartTime = el.workStartTime.value;
  if (el.workEndTime) entry.workEndTime = el.workEndTime.value;
  if (el.workBreakMinutes) entry.workBreakMinutes = el.workBreakMinutes.value;
  if (el.workShiftType) entry.workShiftType = el.workShiftType.value;
  if (el.workLocationDetail) entry.workLocationDetail = el.workLocationDetail.value;
  if (el.workDone) entry.workDone = el.workDone.value;
  if (el.workQuantities) entry.workQuantities = el.workQuantities.value;
  entry.issues = el.issues.value;
  entry.nextSteps = el.nextSteps.value;
  if (el.materialDeliveries) entry.materialDeliveries = el.materialDeliveries.value;
  if (el.equipmentUsed) entry.equipmentUsed = el.equipmentUsed.value;
  if (el.siteVisitors) entry.siteVisitors = el.siteVisitors.value;
  entry.privateNotes = el.privateNotes.value;
  if (el.signatureSignerName) entry.signatureSignerName = el.signatureSignerName.value;
  if (el.signatureSignerRole) entry.signatureSignerRole = el.signatureSignerRole.value;
  updateStatus("Ungespeichert");
  updatePrintMeta();
}

function setManageReportsStatus(text = "", kind = "") {
  setFeedback(el.manageReportsStatus, text, kind);
}

function clearReportOverview() {
  if (el.overviewTotalReports) el.overviewTotalReports.textContent = "0";
  if (el.overviewSavedReports) el.overviewSavedReports.textContent = "0";
  if (el.overviewDraftReports) el.overviewDraftReports.textContent = "0";
  if (el.overviewLastSaved) el.overviewLastSaved.textContent = "-";
  if (el.overviewDaysList) el.overviewDaysList.innerHTML = "";
}

function getEntriesSortedByDate(entries = []) {
  return [...entries].sort((a, b) => {
    const dateA = String(a?.date || "");
    const dateB = String(b?.date || "");
    if (dateA !== dateB) return dateA < dateB ? 1 : -1;
    const savedA = String(a?.savedAt || "");
    const savedB = String(b?.savedAt || "");
    return savedA < savedB ? 1 : -1;
  });
}

function ensureProjectEntriesIntegrity(project) {
  if (!project) return null;
  if (!Array.isArray(project.entries)) project.entries = [];
  if (!project.entries.length) {
    const entry = emptyEntry();
    project.entries = [entry];
    project.activeEntryId = entry.id;
    return entry;
  }
  if (!project.entries.some((item) => item.id === project.activeEntryId)) {
    const sorted = getEntriesSortedByDate(project.entries);
    project.activeEntryId = sorted[0].id;
  }
  return project.entries.find((item) => item.id === project.activeEntryId) || project.entries[0];
}

function renderReportOverview() {
  if (!el.overviewDaysList) return;
  const project = ensureActiveProjectId();
  if (!project) {
    clearReportOverview();
    return;
  }

  ensureProjectEntriesIntegrity(project);
  const entries = Array.isArray(project.entries) ? project.entries : [];
  const savedEntries = entries.filter((item) => Boolean(item.savedAt));
  const draftEntries = entries.filter((item) => !item.savedAt);

  if (el.overviewTotalReports) el.overviewTotalReports.textContent = String(entries.length);
  if (el.overviewSavedReports) el.overviewSavedReports.textContent = String(savedEntries.length);
  if (el.overviewDraftReports) el.overviewDraftReports.textContent = String(draftEntries.length);

  const latestSaved = savedEntries
    .map((item) => String(item.savedAt || ""))
    .filter(Boolean)
    .sort((a, b) => (a < b ? 1 : -1))[0];
  if (el.overviewLastSaved) {
    el.overviewLastSaved.textContent = latestSaved ? fmt(latestSaved) : "-";
  }

  const activeEntry = getActiveEntry();
  const fallbackMonth = String(activeEntry?.date || todayIsoDate()).slice(0, 7);
  const monthValue = String(el.overviewMonthFilter?.value || "").trim();
  const monthFilter = /^\d{4}-\d{2}$/.test(monthValue) ? monthValue : fallbackMonth;
  if (el.overviewMonthFilter && el.overviewMonthFilter.value !== monthFilter) {
    el.overviewMonthFilter.value = monthFilter;
  }

  if (el.manageDateDelete && !el.manageDateDelete.value && activeEntry?.date) {
    el.manageDateDelete.value = activeEntry.date;
  }

  const perDate = new Map();
  for (const item of entries) {
    const date = String(item?.date || "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !date.startsWith(monthFilter)) continue;
    const bucket = perDate.get(date) || { date, total: 0, saved: 0, draft: 0 };
    bucket.total += 1;
    if (item.savedAt) {
      bucket.saved += 1;
    } else {
      bucket.draft += 1;
    }
    perDate.set(date, bucket);
  }

  const dayBuckets = Array.from(perDate.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
  el.overviewDaysList.innerHTML = "";
  if (!dayBuckets.length) {
    const empty = document.createElement("p");
    empty.className = "overview-days-empty";
    empty.textContent = "Für diesen Monat sind keine Berichte vorhanden.";
    el.overviewDaysList.appendChild(empty);
    return;
  }

  for (const bucket of dayBuckets) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "overview-day-pill";
    if (bucket.saved > 0 && bucket.draft === 0) {
      button.classList.add("is-saved");
    } else if (bucket.saved > 0 && bucket.draft > 0) {
      button.classList.add("is-mixed");
    } else {
      button.classList.add("is-draft");
    }
    if (bucket.date === activeEntry?.date) {
      button.classList.add("is-active");
    }

    const suffix = bucket.total > 1 ? ` (${bucket.total})` : "";
    button.textContent = `${fmtEntryDate(bucket.date)}${suffix}`;
    button.addEventListener("click", () => {
      const matches = getEntriesSortedByDate(project.entries).filter((item) => item.date === bucket.date);
      if (!matches.length) return;
      const preferred = matches.find((item) => item.savedAt) || matches[0];
      project.activeEntryId = preferred.id;
      renderEntries();
      syncEntryInputs();
      setManageReportsStatus("");
    });

    el.overviewDaysList.appendChild(button);
  }
}

function renderEntries() {
  const project = ensureActiveProjectId();
  if (!project) {
    el.entryList.innerHTML = "";
    clearReportOverview();
    return;
  }
  ensureProjectEntriesIntegrity(project);
  el.entryList.innerHTML = "";
  const sorted = [...project.entries].sort((a, b) => (a.date < b.date ? 1 : -1));
  for (const entry of sorted) {
    const fragment = el.entryItemTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".entry-select");
    const isSaved = Boolean(entry.savedAt);
    const stamp = isSaved ? ` | ${fmt(entry.savedAt, true)}` : " | Entwurf";
    const prefix = isSaved ? "✓ " : "• ";
    button.textContent = `${prefix}${entry.date || "Ohne Datum"}${stamp}`;
    button.classList.toggle("is-saved", isSaved);
    button.classList.toggle("is-draft", !isSaved);
    button.classList.toggle("active", entry.id === project.activeEntryId);
    button.addEventListener("click", () => {
      project.activeEntryId = entry.id;
      renderEntries();
      syncEntryInputs();
    });
    el.entryList.appendChild(fragment);
  }
  renderReportOverview();
}

function renderTodos(entry) {
  el.todoList.innerHTML = "";
  for (const todo of entry.todos) {
    const fragment = el.todoItemTemplate.content.cloneNode(true);
    const item = fragment.querySelector(".todo-item");
    const checkbox = fragment.querySelector("input");
    const text = fragment.querySelector("span");
    const removeButton = fragment.querySelector(".todo-remove");

    text.textContent = todo.text;
    checkbox.checked = !!todo.done;
    item.classList.toggle("done", !!todo.done);

    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked;
      item.classList.toggle("done", checkbox.checked);
      persist();
      updateStatus("Ungespeichert");
    });

    removeButton.addEventListener("click", () => {
      entry.todos = entry.todos.filter((x) => x.id !== todo.id);
      renderTodos(entry);
      persist();
      updateStatus("Ungespeichert");
    });

    el.todoList.appendChild(fragment);
  }
}

function formatLocationWorkItemPrintLine(item) {
  const location = toPrintText(item?.location, "Ohne Ort");
  const description = toPrintText(item?.description, "Ohne Leistungsbeschreibung");
  let line = `${location}: ${description}`;
  const quantity = String(item?.quantity || "").trim();
  if (quantity) {
    line += ` | Gewerk: ${quantity}`;
  }
  return line;
}

function renderLocationWorkItems(entry) {
  if (!el.workItemsList) return;
  el.workItemsList.innerHTML = "";
  const items = Array.isArray(entry?.locationWorkItems) ? entry.locationWorkItems : [];
  if (!items.length) {
    const empty = document.createElement("li");
    empty.className = "work-items-empty";
    empty.textContent = "Noch keine Leistungspositionen nach Ort erfasst.";
    el.workItemsList.appendChild(empty);
    return;
  }

  for (const item of items) {
    const li = document.createElement("li");
    li.className = "work-item";

    const main = document.createElement("p");
    main.className = "work-item-main";
    main.textContent = `${toPrintText(item.location, "-")}: ${toPrintText(item.description, "-")}`;

    const meta = document.createElement("p");
    meta.className = "work-item-meta";
    meta.textContent = `Gewerk: ${toPrintText(item.quantity, "-")}`;

    const details = document.createElement("div");
    details.className = "work-item-details";
    details.appendChild(main);
    details.appendChild(meta);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "work-item-remove";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => {
      entry.locationWorkItems = entry.locationWorkItems.filter((x) => x.id !== item.id);
      renderLocationWorkItems(entry);
      persist();
      updateStatus("Ungespeichert");
    });

    li.appendChild(details);
    li.appendChild(removeButton);
    el.workItemsList.appendChild(li);
  }
}

function addLocationWorkItem(
  locationValue = null,
  descriptionValue = null,
  quantityValue = null
) {
  const entry = getActiveEntry();
  if (!entry) return false;
  if (!Array.isArray(entry.locationWorkItems)) entry.locationWorkItems = [];

  const location = String((locationValue ?? el.workItemLocationInput?.value) || "").trim();
  const description = String((descriptionValue ?? el.workItemDescriptionInput?.value) || "").trim();
  const quantity = String((quantityValue ?? el.workItemQuantityInput?.value) || "").trim();

  if (!location || !description) {
    setManageReportsStatus("Bitte Ort und Leistungsbeschreibung eintragen.", "error");
    return false;
  }

  entry.locationWorkItems.push({
    id: uid(),
    location,
    description,
    quantity,
  });

  if (locationValue == null && el.workItemLocationInput) el.workItemLocationInput.value = "";
  if (descriptionValue == null && el.workItemDescriptionInput) el.workItemDescriptionInput.value = "";
  if (quantityValue == null && el.workItemQuantityInput) el.workItemQuantityInput.value = "";

  renderLocationWorkItems(entry);
  persist();
  updateStatus("Ungespeichert");
  setManageReportsStatus("Leistungsposition hinzugefügt.", "success");
  return true;
}

function toSortedSuggestionValues(valuesSet) {
  return Array.from(valuesSet).sort((a, b) => a.localeCompare(b, "de-DE"));
}

function collectCompanyWorkerSuggestions() {
  const companies = new Set();
  const trades = new Set();
  const contacts = new Set();
  const employeeNames = new Set();

  for (const project of state.projects) {
    const entries = Array.isArray(project?.entries) ? project.entries : [];
    for (const entry of entries) {
      const workers = Array.isArray(entry?.companyWorkers) ? entry.companyWorkers : [];
      for (const item of workers) {
        const company = normalizeUserName(item?.company || "");
        const trade = normalizeUserName(item?.trade || "");
        const contact = normalizeUserName(item?.contact || "");
        const employeeName = normalizeUserName(item?.employeeName || "");
        if (company) companies.add(company);
        if (trade) trades.add(trade);
        if (contact) contacts.add(contact);
        if (employeeName) employeeNames.add(employeeName);
      }
    }
  }

  return {
    companies: toSortedSuggestionValues(companies),
    trades: toSortedSuggestionValues(trades),
    contacts: toSortedSuggestionValues(contacts),
    employeeNames: toSortedSuggestionValues(employeeNames),
  };
}

function renderSuggestionDatalist(node, values = []) {
  if (!node) return;
  node.innerHTML = "";
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    node.appendChild(option);
  }
}

function renderCompanyWorkerSuggestions() {
  const pool = collectCompanyWorkerSuggestions();
  renderSuggestionDatalist(el.companyNameSuggestions, pool.companies);
  renderSuggestionDatalist(el.companyTradeSuggestions, pool.trades);
  renderSuggestionDatalist(el.companyContactSuggestions, pool.contacts);
  renderSuggestionDatalist(el.companyEmployeeSuggestions, pool.employeeNames);
}

function getCompanyWorkerGroupKey(item = {}) {
  return normalizeUserName(item?.company || "").toLowerCase();
}

function formatCompanyWorkerPersonTime(item = {}) {
  const start = String(item?.shiftStart || "").trim();
  const end = String(item?.shiftEnd || "").trim();
  const breakMinutes = String(item?.shiftBreakMinutes || "").trim();
  if (!start && !end && !breakMinutes) return "ohne Zeitangabe";

  let label = "";
  if (start || end) {
    label = `von ${start || "-"} bis ${end || "-"}`;
  }
  if (breakMinutes) {
    label = label ? `${label}, Pause ${breakMinutes} Min.` : `Pause ${breakMinutes} Min.`;
  }
  return label || "ohne Zeitangabe";
}

function buildCompanyWorkerGroups(items = []) {
  const groups = [];
  const lookup = new Map();

  for (const item of Array.isArray(items) ? items : []) {
    const company = normalizeUserName(item?.company || "");
    if (!company) continue;

    const trade = normalizeUserName(item?.trade || "");
    const contact = normalizeUserName(item?.contact || "");
    const shiftStart = String(item?.shiftStart || "").trim();
    const shiftEnd = String(item?.shiftEnd || "").trim();
    const shiftBreakMinutes = String(item?.shiftBreakMinutes || "").trim();
    const key = getCompanyWorkerGroupKey({ company });

    let group = lookup.get(key);
    if (!group) {
      group = {
        key,
        company,
        trades: [],
        contacts: [],
        employees: [],
        legacyCount: 0,
      };
      lookup.set(key, group);
      groups.push(group);
    }
    if (trade && !group.trades.includes(trade)) group.trades.push(trade);
    if (contact && !group.contacts.includes(contact)) group.contacts.push(contact);

    const employeeName = normalizeUserName(item?.employeeName || "");
    if (employeeName) {
      group.employees.push({
        id: String(item?.id || uid()),
        name: employeeName,
        shiftStart,
        shiftEnd,
        shiftBreakMinutes,
      });
    } else {
      const workerCount = Math.max(1, Number(item?.count || 1));
      group.legacyCount += workerCount;
    }
  }

  return groups;
}

function commitCompanyWorkersChange(entry) {
  updateWorkersFromCompanyList(entry);
  renderCompanyWorkers(entry);
  renderCompanyWorkerSuggestions();
  persist();
  updateStatus("Ungespeichert");
}

function renderCompanyWorkers(entry) {
  el.companyWorkersList.innerHTML = "";
  const groups = buildCompanyWorkerGroups(entry.companyWorkers);

  for (const group of groups) {
    const li = document.createElement("li");
    li.className = "company-workers-item";

    const details = document.createElement("div");
    details.className = "company-workers-details";

    const company = document.createElement("p");
    company.className = "company-workers-company";
    const groupedCount = group.employees.length + group.legacyCount;
    company.textContent = `${group.company} - ${groupedCount} Mitarbeiter`;

    const meta = document.createElement("p");
    meta.className = "company-workers-meta";
    meta.textContent = `Gewerk: ${toPrintText(group.trades.join(", "), "-")} | Ansprechpartner: ${toPrintText(
      group.contacts.join(", "),
      "-"
    )}`;

    const employeesList = document.createElement("ul");
    employeesList.className = "company-workers-members";
    for (const employee of group.employees) {
      const employeeRow = document.createElement("li");
      employeeRow.className = "company-workers-member";

      const employeeText = document.createElement("span");
      employeeText.className = "company-workers-member-text";
      employeeText.textContent = `${toPrintText(employee.name, "Ohne Namen")} - ${formatCompanyWorkerPersonTime(
        employee
      )}`;

      const removeEmployeeButton = document.createElement("button");
      removeEmployeeButton.type = "button";
      removeEmployeeButton.className = "company-workers-member-remove";
      removeEmployeeButton.textContent = "x";
      removeEmployeeButton.addEventListener("click", () => {
        entry.companyWorkers = entry.companyWorkers.filter((x) => x.id !== employee.id);
        commitCompanyWorkersChange(entry);
      });

      employeeRow.appendChild(employeeText);
      employeeRow.appendChild(removeEmployeeButton);
      employeesList.appendChild(employeeRow);
    }

    if (group.legacyCount > 0) {
      const legacyRow = document.createElement("li");
      legacyRow.className = "company-workers-member";
      const legacyText = document.createElement("span");
      legacyText.className = "company-workers-member-text";
      legacyText.textContent = `${group.legacyCount} Person(en) ohne Namen`;
      legacyRow.appendChild(legacyText);
      employeesList.appendChild(legacyRow);
    }

    details.appendChild(company);
    details.appendChild(meta);
    if (employeesList.childElementCount > 0) {
      details.appendChild(employeesList);
    }

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "company-workers-remove";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => {
      entry.companyWorkers = entry.companyWorkers.filter(
        (x) => getCompanyWorkerGroupKey(x) !== group.key
      );
      commitCompanyWorkersChange(entry);
    });

    li.appendChild(details);
    li.appendChild(removeButton);
    el.companyWorkersList.appendChild(li);
  }
}

function renderEntryPhotos(entry) {
  if (!el.entryPhotoGrid) return;
  el.entryPhotoGrid.innerHTML = "";

  const photos = Array.isArray(entry?.photos) ? entry.photos : [];
  if (!photos.length) {
    const empty = document.createElement("p");
    empty.className = "photo-empty";
    empty.textContent = "Noch keine Fotos im Bericht.";
    el.entryPhotoGrid.appendChild(empty);
    return;
  }

  let rendered = 0;
  for (const photo of photos) {
    const src = resolvePhotoSource(photo);
    if (!src) continue;
    const wrapper = document.createElement("article");
    wrapper.className = "entry-photo-card";

    const photoFrame = document.createElement("div");
    photoFrame.className = "photo";

    const img = document.createElement("img");
    img.src = src;
    img.alt = photo.name || "Baufoto";

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "x";
    remove.addEventListener("click", () => {
      entry.photos = entry.photos.filter((item) => item.id !== photo.id);
      renderEntryPhotos(entry);
      persist();
      updateStatus("Ungespeichert");
    });

    const details = document.createElement("div");
    details.className = "entry-photo-meta";

    const nameRow = document.createElement("p");
    nameRow.className = "entry-photo-name";
    nameRow.textContent = toPrintText(photo.name, "Foto");

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.placeholder = "Bildbeschreibung";
    descriptionInput.value = String(photo.description || "");
    descriptionInput.addEventListener("input", () => {
      photo.description = descriptionInput.value;
      persist();
      updateStatus("Ungespeichert");
    });

    const locationInput = document.createElement("input");
    locationInput.type = "text";
    locationInput.placeholder = "Bauabschnitt / Ort";
    locationInput.value = String(photo.location || "");
    locationInput.addEventListener("input", () => {
      photo.location = locationInput.value;
      persist();
      updateStatus("Ungespeichert");
    });

    details.appendChild(nameRow);
    details.appendChild(descriptionInput);
    details.appendChild(locationInput);

    photoFrame.appendChild(img);
    photoFrame.appendChild(remove);
    wrapper.appendChild(photoFrame);
    wrapper.appendChild(details);
    el.entryPhotoGrid.appendChild(wrapper);
    rendered += 1;
  }

  if (!rendered) {
    const empty = document.createElement("p");
    empty.className = "photo-empty";
    empty.textContent = "Fotos sind in der Cloud gespeichert. Bitte Cloud verbinden.";
    el.entryPhotoGrid.appendChild(empty);
  }
}

function renderPhotos() {
  if (!el.photoGrid) return;
  setPhotoFolderPdfStatus("");
  const project = ensureActiveProjectId();
  if (!project) {
    el.photoGrid.innerHTML = "";
    return;
  }
  ensureProjectMediaState(project);
  el.photoGrid.innerHTML = "";

  const activeFolderId = project.activePhotoFolderId || DEFAULT_PHOTO_FOLDER_ID;
  const photos = Array.isArray(project.photos) ? project.photos : [];
  const visiblePhotos = photos.filter((photo) => photo.folderId === activeFolderId);

  if (!visiblePhotos.length) {
    const empty = document.createElement("p");
    empty.className = "photo-empty";
    empty.textContent = "In diesem Ordner sind noch keine Bilder.";
    el.photoGrid.appendChild(empty);
    return;
  }

  let rendered = 0;
  for (const photo of visiblePhotos) {
    const src = resolvePhotoSource(photo);
    if (!src) continue;
    const wrapper = document.createElement("div");
    wrapper.className = "photo";
    const img = document.createElement("img");
    img.src = src;
    img.alt = photo.name || "Baufoto";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "x";
    remove.addEventListener("click", () => {
      project.photos = project.photos.filter((item) => item.id !== photo.id);
      renderPhotoFolders();
      renderPhotos();
      persist();
      updateStatus("Ungespeichert");
    });
    wrapper.appendChild(img);
    wrapper.appendChild(remove);
    el.photoGrid.appendChild(wrapper);
    rendered += 1;
  }

  if (!rendered) {
    const empty = document.createElement("p");
    empty.className = "photo-empty";
    empty.textContent = "Bilder sind in der Cloud gespeichert. Bitte Cloud verbinden.";
    el.photoGrid.appendChild(empty);
  }
}

function renderPhotoFolders() {
  if (!el.photoFolderSelect || !el.deletePhotoFolderBtn) return;
  const project = ensureActiveProjectId();
  if (!project) {
    el.photoFolderSelect.innerHTML = "";
    el.deletePhotoFolderBtn.disabled = true;
    return;
  }
  ensureProjectMediaState(project);

  const activeFolderId = project.activePhotoFolderId || DEFAULT_PHOTO_FOLDER_ID;
  const photos = Array.isArray(project.photos) ? project.photos : [];
  const counts = photos.reduce((acc, photo) => {
    const key = photo.folderId || DEFAULT_PHOTO_FOLDER_ID;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  el.photoFolderSelect.innerHTML = "";
  for (const folder of project.photoFolders) {
    const option = document.createElement("option");
    option.value = folder.id;
    option.textContent = `${folder.name} (${counts[folder.id] || 0})`;
    option.selected = folder.id === activeFolderId;
    el.photoFolderSelect.appendChild(option);
  }

  el.deletePhotoFolderBtn.disabled = activeFolderId === DEFAULT_PHOTO_FOLDER_ID;
}

function addPhotoFolder(nameValue = null) {
  const project = ensureActiveProjectId();
  if (!project) return false;
  ensureProjectMediaState(project);
  const name = String(nameValue ?? el.photoFolderInput?.value ?? "")
    .replace(/\s+/g, " ")
    .trim();
  if (!name) return false;

  const existing = project.photoFolders.find(
    (folder) => folder.name.toLowerCase() === name.toLowerCase()
  );
  if (existing) {
    project.activePhotoFolderId = existing.id;
  } else {
    const folder = { id: uid(), name };
    project.photoFolders.push(folder);
    project.activePhotoFolderId = folder.id;
  }

  if (el.photoFolderInput && nameValue == null) {
    el.photoFolderInput.value = "";
  }

  renderPhotoFolders();
  renderPhotos();
  persist();
  updateStatus("Ungespeichert");
  return true;
}

function setActivePhotoFolder(folderId) {
  const project = ensureActiveProjectId();
  if (!project) return;
  ensureProjectMediaState(project);
  const validFolderId = project.photoFolders.some((folder) => folder.id === folderId)
    ? folderId
    : DEFAULT_PHOTO_FOLDER_ID;
  project.activePhotoFolderId = validFolderId;
  renderPhotoFolders();
  renderPhotos();
  persist();
}

function deleteActivePhotoFolder() {
  const project = ensureActiveProjectId();
  if (!project) return;
  ensureProjectMediaState(project);
  const folderId = project.activePhotoFolderId || DEFAULT_PHOTO_FOLDER_ID;
  if (folderId === DEFAULT_PHOTO_FOLDER_ID) return;

  const folder = project.photoFolders.find((item) => item.id === folderId);
  const folderName = folder ? folder.name : "diesen Ordner";
  const ok = confirm(
    `Ordner "${folderName}" löschen? Die Bilder werden nach "${DEFAULT_PHOTO_FOLDER_NAME}" verschoben.`
  );
  if (!ok) return;

  project.photoFolders = project.photoFolders.filter((item) => item.id !== folderId);
  for (const photo of project.photos) {
    if (photo.folderId === folderId) {
      photo.folderId = DEFAULT_PHOTO_FOLDER_ID;
    }
  }
  project.activePhotoFolderId = DEFAULT_PHOTO_FOLDER_ID;
  ensureProjectMediaState(project);
  renderPhotoFolders();
  renderPhotos();
  persist();
  updateStatus("Ungespeichert");
}

function setPhotoFolderPdfStatus(text = "", kind = "") {
  setFeedback(el.photoFolderPdfStatus, text, kind);
}

function exportActivePhotoFolderPdf() {
  const project = ensureActiveProjectId();
  if (!project) {
    setPhotoFolderPdfStatus("Keine aktive Baustelle gefunden.", "error");
    return;
  }
  ensureProjectMediaState(project);

  const folderId = project.activePhotoFolderId || DEFAULT_PHOTO_FOLDER_ID;
  const folder = project.photoFolders.find((item) => item.id === folderId) || null;
  const folderName = normalizeUserName(folder?.name || DEFAULT_PHOTO_FOLDER_NAME) || DEFAULT_PHOTO_FOLDER_NAME;
  const allFolderPhotos = Array.isArray(project.photos)
    ? project.photos.filter((photo) => photo.folderId === folderId)
    : [];
  const resolvedPhotos = allFolderPhotos
    .map((photo) => ({
      name: String(photo?.name || "Baufoto"),
      source: resolvePhotoSource(photo),
    }))
    .filter((photo) => String(photo.source || "").trim());

  if (!allFolderPhotos.length) {
    setPhotoFolderPdfStatus("Im ausgewählten Ordner sind keine Bilder vorhanden.", "error");
    return;
  }
  if (!resolvedPhotos.length) {
    setPhotoFolderPdfStatus("Bilder nicht verfügbar. Bitte Cloud verbinden und erneut versuchen.", "error");
    return;
  }

  const projectName = normalizeUserName(project.name) || "-";
  const projectNumber = normalizeUserName(project.number) || "-";
  const projectManager = normalizeUserName(project.manager) || "-";
  const generatedAt = new Date().toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" });

  const photosPerPage = 6;
  const pageChunks = [];
  for (let index = 0; index < resolvedPhotos.length; index += photosPerPage) {
    pageChunks.push(resolvedPhotos.slice(index, index + photosPerPage));
  }
  const totalPages = pageChunks.length;

  const pagesHtml = pageChunks
    .map((chunk, pageIndex) => {
      const imageOffset = pageIndex * photosPerPage;
      const photoItems = chunk
        .map(
          (photo, index) => `
            <figure class="photo-item">
              <div class="photo-frame">
                <img src="${escapeHtml(photo.source)}" alt="${escapeHtml(photo.name || `Foto ${imageOffset + index + 1}`)}" />
              </div>
              <figcaption>${escapeHtml(photo.name || `Foto ${imageOffset + index + 1}`)}</figcaption>
            </figure>
          `
        )
        .join("");

      const rangeStart = imageOffset + 1;
      const rangeEnd = imageOffset + chunk.length;
      return `
        <main class="page">
          <header class="head">
            <p class="head-title">Fotoanhang Ordner: ${escapeHtml(folderName)}</p>
            <p class="head-meta">
              Baustelle: ${escapeHtml(projectName)} | Projekt-Nr.: ${escapeHtml(projectNumber)} |
              Bauleitung: ${escapeHtml(projectManager)} | Erstellt: ${escapeHtml(generatedAt)}
            </p>
          </header>

          <section class="photo-grid">
            ${photoItems}
          </section>

          <p class="footer">
            Seite ${escapeHtml(String(pageIndex + 1))} / ${escapeHtml(String(totalPages))} - Bilder
            ${escapeHtml(String(rangeStart))}-${escapeHtml(String(rangeEnd))}
          </p>
        </main>
      `;
    })
    .join("");

  const docHtml = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fotoordner - ${escapeHtml(projectName)} - ${escapeHtml(folderName)}</title>
    <style>
      @page { size: A4 portrait; margin: 9mm; }
      * { box-sizing: border-box; }
      body { margin: 0; font-family: "Source Sans 3", Arial, sans-serif; color: #152338; background: #fff; }
      .page { width: 100%; }
      .page + .page { break-before: page; page-break-before: always; }
      .head { border-bottom: 1px solid #c8d1df; padding-bottom: 2mm; margin-bottom: 2.2mm; }
      .head-title { margin: 0; font-size: 12px; font-weight: 700; font-family: Merriweather, Georgia, serif; }
      .head-meta { margin: 1mm 0 0; font-size: 9px; color: #3f536d; line-height: 1.2; }
      .photo-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3mm; }
      .photo-item {
        margin: 0;
        border: 1px solid #d4dbe7;
        padding: 1.8mm;
        height: 72mm;
        display: flex;
        flex-direction: column;
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .photo-frame {
        border: 1px solid #dde3ec;
        background: #f8fafc;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.2mm;
        flex: 1 1 auto;
        min-height: 0;
      }
      .photo-item img {
        display: block;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      .photo-item figcaption {
        margin-top: 1mm;
        font-size: 9px;
        color: #3f536d;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .footer { margin: 1.8mm 0 0; font-size: 9px; color: #4f6077; text-align: right; }
      @media print {
        .photo-item { break-inside: avoid; page-break-inside: avoid; }
      }
    </style>
  </head>
  <body>
    ${pagesHtml}
    <script>
      window.addEventListener("load", function () {
        setTimeout(function () { window.print(); }, 220);
      });
    </script>
  </body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    setPhotoFolderPdfStatus("Pop-up blockiert. Bitte Pop-ups erlauben und erneut klicken.", "error");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(docHtml);
  printWindow.document.close();
  printWindow.focus();
  setPhotoFolderPdfStatus(
    "PDF-Ansicht geöffnet. Im Druckdialog 'Als PDF speichern' auswählen.",
    "success"
  );
}

function setWorkTimeStatus(text = "", kind = "") {
  setFeedback(el.workTimeStatus, text, kind);
}

function ensureProjectWorkShifts(project = null) {
  const target = project || ensureActiveProjectId();
  if (!target) return [];
  const raw = Array.isArray(target.workShifts) ? target.workShifts : [];
  target.workShifts = raw.map((item) => normalizeWorkShift(item)).filter(Boolean);
  return target.workShifts;
}

function getSelectedWorkTimeDate() {
  const value = String(el.workTimeDate?.value || "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const entry = getActiveEntry();
  return entry?.date || todayIsoDate();
}

function syncWorkTimeInputs() {
  if (!el.workTimeDate) return;
  const project = ensureActiveProjectId();
  if (!project) return;
  ensureProjectWorkShifts(project);

  const entry = getActiveEntry();
  const defaultDate = entry?.date || todayIsoDate();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(el.workTimeDate.value || ""))) {
    el.workTimeDate.value = defaultDate;
  }
  if (el.workTimeStart && !el.workTimeStart.value) el.workTimeStart.value = "08:00";
  if (el.workTimeEnd && !el.workTimeEnd.value) el.workTimeEnd.value = "16:00";
  if (el.workTimeBreak && !String(el.workTimeBreak.value || "").trim()) el.workTimeBreak.value = "0";
}

function formatHoursFromMinutes(minutes) {
  const safeMinutes = Number.isFinite(minutes) ? Math.max(0, minutes) : 0;
  const hours = safeMinutes / 60;
  return hours.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });
}

function deleteWorkTimeEntry(entryId) {
  const project = ensureActiveProjectId();
  if (!project) return;
  const shifts = ensureProjectWorkShifts(project);
  const next = shifts.filter((item) => item.id !== entryId);
  if (next.length === shifts.length) return;
  project.workShifts = next;
  renderWorkTimes();
  persist();
  setWorkTimeStatus("Arbeitszeit-Eintrag entfernt.", "success");
}

function renderWorkTimes() {
  if (!el.workTimesTableBody || !el.workTimesDaySummary || !el.workTimesEntryCount) return;
  const project = ensureActiveProjectId();
  if (!project) {
    el.workTimesTableBody.innerHTML = "";
    el.workTimesDaySummary.textContent = "Gesamtstunden: 0,0 h";
    el.workTimesEntryCount.textContent = "0 Einträge";
    return;
  }

  const selectedDate = getSelectedWorkTimeDate();
  if (el.workTimeDate) el.workTimeDate.value = selectedDate;
  const shifts = ensureProjectWorkShifts(project);
  const dayEntries = shifts
    .filter((item) => item.date === selectedDate)
    .sort((a, b) => {
      const startA = parseTimeToMinutes(a.start) ?? 0;
      const startB = parseTimeToMinutes(b.start) ?? 0;
      if (startA !== startB) return startA - startB;
      return String(a.employee || "").localeCompare(String(b.employee || ""), "de-DE");
    });

  let totalMinutes = 0;
  el.workTimesTableBody.innerHTML = "";

  if (!dayEntries.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.className = "worktimes-empty";
    cell.textContent = "Noch keine Arbeitszeiten für dieses Datum.";
    row.appendChild(cell);
    el.workTimesTableBody.appendChild(row);
  } else {
    for (const item of dayEntries) {
      const duration = getShiftDurationMinutes(item.start, item.end, item.breakMinutes);
      if (duration == null) continue;
      totalMinutes += duration;

      const row = document.createElement("tr");
      const employeeCell = document.createElement("td");
      employeeCell.textContent = item.employee || "-";
      const companyCell = document.createElement("td");
      companyCell.textContent = item.company || "-";
      const startCell = document.createElement("td");
      startCell.textContent = item.start;
      const endCell = document.createElement("td");
      endCell.textContent = item.end;
      const breakCell = document.createElement("td");
      breakCell.textContent = `${item.breakMinutes} Min.`;
      const hoursCell = document.createElement("td");
      hoursCell.textContent = `${formatHoursFromMinutes(duration)} h`;
      const actionCell = document.createElement("td");
      row.appendChild(employeeCell);
      row.appendChild(companyCell);
      row.appendChild(startCell);
      row.appendChild(endCell);
      row.appendChild(breakCell);
      row.appendChild(hoursCell);
      row.appendChild(actionCell);

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "worktimes-remove";
      removeButton.textContent = "x";
      removeButton.setAttribute("aria-label", "Eintrag löschen");
      removeButton.addEventListener("click", () => deleteWorkTimeEntry(item.id));
      actionCell?.appendChild(removeButton);

      el.workTimesTableBody.appendChild(row);
    }
  }

  const countLabel = dayEntries.length === 1 ? "Eintrag" : "Einträge";
  el.workTimesDaySummary.textContent = `Gesamtstunden: ${formatHoursFromMinutes(totalMinutes)} h`;
  el.workTimesEntryCount.textContent = `${dayEntries.length} ${countLabel}`;
}

function addWorkTimeEntry() {
  const project = ensureActiveProjectId();
  if (!project) return false;

  const date = String(el.workTimeDate?.value || "").trim();
  const start = String(el.workTimeStart?.value || "").trim();
  const end = String(el.workTimeEnd?.value || "").trim();
  const employee = normalizeUserName(el.workTimeName?.value || "");
  const company = normalizeUserName(el.workTimeCompany?.value || "");
  const breakMinutes = normalizeBreakMinutes(el.workTimeBreak?.value || 0);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    setWorkTimeStatus("Bitte ein gültiges Datum wählen.", "error");
    return false;
  }
  if (!employee) {
    setWorkTimeStatus("Bitte Mitarbeiter eintragen.", "error");
    return false;
  }
  if (!company) {
    setWorkTimeStatus("Bitte Unternehmen eintragen.", "error");
    return false;
  }

  const startMinutes = parseTimeToMinutes(start);
  const endMinutes = parseTimeToMinutes(end);
  if (startMinutes == null || endMinutes == null) {
    setWorkTimeStatus("Bitte gültige Uhrzeiten eintragen.", "error");
    return false;
  }
  if (endMinutes <= startMinutes) {
    setWorkTimeStatus("Endzeit muss nach der Startzeit liegen.", "error");
    return false;
  }

  const grossMinutes = endMinutes - startMinutes;
  if (breakMinutes >= grossMinutes) {
    setWorkTimeStatus("Pause ist zu lang für den gewählten Zeitraum.", "error");
    return false;
  }

  const duration = getShiftDurationMinutes(start, end, breakMinutes);
  if (duration == null) {
    setWorkTimeStatus("Die Zeitspanne ist ungültig.", "error");
    return false;
  }

  const shifts = ensureProjectWorkShifts(project);
  shifts.push({
    id: uid(),
    date,
    start,
    end,
    employee,
    company,
    breakMinutes,
    createdAt: new Date().toISOString(),
  });
  project.workShifts = shifts;

  persist();
  renderWorkTimes();
  if (el.workTimeName) el.workTimeName.value = "";
  if (el.workTimeBreak) el.workTimeBreak.value = "0";
  setWorkTimeStatus(`Arbeitszeit gespeichert (${formatHoursFromMinutes(duration)} h).`, "success");
  if (el.workTimeName) el.workTimeName.focus();
  return true;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function exportAllWorkTimesPdf() {
  const project = ensureActiveProjectId();
  if (!project) return;

  const rows = ensureProjectWorkShifts(project)
    .map((item) => ({
      item,
      durationMinutes: getShiftDurationMinutes(item.start, item.end, item.breakMinutes),
    }))
    .filter((entry) => Number.isFinite(entry.durationMinutes) && entry.durationMinutes > 0)
    .sort((a, b) => {
      const byDate = String(a.item.date || "").localeCompare(String(b.item.date || ""));
      if (byDate !== 0) return byDate;
      const startA = parseTimeToMinutes(a.item.start) ?? 0;
      const startB = parseTimeToMinutes(b.item.start) ?? 0;
      if (startA !== startB) return startA - startB;
      return String(a.item.employee || "").localeCompare(String(b.item.employee || ""), "de-DE");
    });

  if (!rows.length) {
    setWorkTimeStatus("Keine gespeicherten Arbeitszeiten für die PDF vorhanden.", "error");
    return;
  }

  const totalMinutes = rows.reduce((sum, row) => sum + row.durationMinutes, 0);
  const generatedAt = new Date().toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" });
  const projectName = normalizeUserName(project.name) || "-";
  const projectNumber = normalizeUserName(project.number) || "-";
  const projectManager = normalizeUserName(project.manager) || "-";

  const tableRows = rows
    .map(
      ({ item, durationMinutes }) => `
        <tr>
          <td>${escapeHtml(fmtEntryDate(item.date))}</td>
          <td>${escapeHtml(item.employee || "-")}</td>
          <td>${escapeHtml(item.company || "-")}</td>
          <td>${escapeHtml(item.start)}</td>
          <td>${escapeHtml(item.end)}</td>
          <td>${escapeHtml(String(item.breakMinutes))} Min.</td>
          <td>${escapeHtml(formatHoursFromMinutes(durationMinutes))} h</td>
        </tr>
      `
    )
    .join("");

  const docHtml = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arbeitszeiten - ${escapeHtml(projectName)}</title>
    <style>
      @page { size: A4 portrait; margin: 14mm 12mm; }
      * { box-sizing: border-box; }
      body { margin: 0; font-family: "Source Sans 3", Arial, sans-serif; color: #172334; background: #fff; }
      .page { width: 100%; padding: 0; }
      .head { border-bottom: 1px solid #c4ccda; padding-bottom: 10px; margin-bottom: 12px; }
      .kicker { margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #355173; font-weight: 700; }
      h1 { margin: 4px 0 2px; font-size: 22px; font-family: Merriweather, Georgia, serif; }
      .meta { margin-top: 8px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
      .meta div { border: 1px solid #cfd6e2; padding: 6px 8px; font-size: 12px; }
      .meta strong { display: block; font-size: 13px; color: #1a2d45; margin-top: 2px; }
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #cfd6e2; padding: 6px 7px; font-size: 12px; text-align: left; }
      th { background: #eef3fa; text-transform: uppercase; letter-spacing: 0.04em; font-size: 11px; color: #304f73; }
      tfoot td { font-weight: 700; background: #f7f9fc; }
      .right { text-align: right; }
      .footer { margin-top: 10px; font-size: 11px; color: #4f6077; }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="head">
        <p class="kicker">Baudokumentation - Arbeitszeiten</p>
        <h1>Gesamtübersicht Arbeitszeiten</h1>
        <div class="meta">
          <div>Baustelle<strong>${escapeHtml(projectName)}</strong></div>
          <div>Projekt-Nr.<strong>${escapeHtml(projectNumber)}</strong></div>
          <div>Bauleitung<strong>${escapeHtml(projectManager)}</strong></div>
          <div>Erstellt am<strong>${escapeHtml(generatedAt)}</strong></div>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Mitarbeiter</th>
            <th>Unternehmen</th>
            <th>Von</th>
            <th>Bis</th>
            <th>Pause</th>
            <th>Stunden</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="right">Gesamtstunden</td>
            <td>${escapeHtml(formatHoursFromMinutes(totalMinutes))} h</td>
          </tr>
        </tfoot>
      </table>
      <p class="footer">Einträge gesamt: ${escapeHtml(String(rows.length))}</p>
    </main>
    <script>
      window.addEventListener("load", function () {
        setTimeout(function () { window.print(); }, 220);
      });
    </script>
  </body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    setWorkTimeStatus("Pop-up blockiert. Bitte Pop-ups erlauben und erneut klicken.", "error");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(docHtml);
  printWindow.document.close();
  printWindow.focus();
  setWorkTimeStatus("PDF-Ansicht geöffnet. Im Druckdialog 'Als PDF speichern' wählen.", "success");
}

function scheduleEntryAutoSave() {
  const projectId = state.activeProjectId;
  const entryId = getActiveEntry()?.id || "";
  const shouldSaveEntryStamp = isBautagebuchVisible();
  if (autoSaveDraft.timer) {
    window.clearTimeout(autoSaveDraft.timer);
  }
  setSaveIndicator("saving", "Wird automatisch gespeichert...");
  autoSaveDraft.timer = window.setTimeout(() => {
    autoSaveDraft.timer = null;
    if (!shouldSaveEntryStamp) {
      persist();
      setSaveIndicator("saved", "Änderungen gespeichert");
      return;
    }
    const project = state.projects.find((item) => item.id === projectId) || null;
    const entry = project?.entries?.find((item) => item.id === entryId) || null;
    if (entry) {
      entry.savedAt = new Date().toISOString();
      persist();
      if (state.activeProjectId === projectId && getActiveEntry()?.id === entryId) {
        renderEntries();
        updateStatus(`Gespeichert ${fmt(entry.savedAt, true)}`);
      } else {
        setSaveIndicator("saved", "Änderungen gespeichert");
      }
      return;
    }
    persist();
    setSaveIndicator("saved", "Änderungen gespeichert");
  }, autoSaveDraft.delayMs);
}

function updateStatus(text) {
  if (!el.statusBadge) return;
  const value = String(text || "").trim();
  const lower = value.toLowerCase();

  el.statusBadge.classList.remove("status-saved", "status-saving", "status-dirty");

  if (lower === "ungespeichert") {
    el.statusBadge.textContent = "Wird automatisch gespeichert...";
    el.statusBadge.classList.add("status-saving");
    scheduleEntryAutoSave();
    return;
  }

  if (!value) {
    el.statusBadge.textContent = "Noch nicht gespeichert";
    el.statusBadge.classList.add("status-dirty");
    setSaveIndicator("dirty", "Noch nicht gespeichert");
    return;
  }

  el.statusBadge.textContent = value;
  if (lower.includes("gespeichert")) {
    el.statusBadge.classList.add("status-saved");
    setSaveIndicator("saved", value);
    return;
  }

  if (lower.includes("nicht gespeichert")) {
    el.statusBadge.classList.add("status-dirty");
    setSaveIndicator("dirty", value);
    return;
  }

  el.statusBadge.classList.add("status-dirty");
}

function fmt(isoString, withTime = false) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  if (!withTime) return date.toLocaleString("de-DE");
  return date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
}

function fmtEntryDate(dateValue) {
  if (!dateValue) return "";
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateValue);
  if (match) return `${match[3]}.${match[2]}.${match[1]}`;
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleDateString("de-DE");
}

function getReportTimelinessInfo(entry) {
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(entry?.date || ""));
  if (!dateMatch) {
    return {
      label: "Nicht bewertbar",
      delayDays: null,
    };
  }

  const reportDay = Date.UTC(Number(dateMatch[1]), Number(dateMatch[2]) - 1, Number(dateMatch[3]));
  const ref = entry?.savedAt ? new Date(entry.savedAt) : new Date();
  if (Number.isNaN(ref.getTime())) {
    return {
      label: "Nicht bewertbar",
      delayDays: null,
    };
  }

  const refDay = Date.UTC(ref.getFullYear(), ref.getMonth(), ref.getDate());
  const delayDays = Math.max(0, Math.floor((refDay - reportDay) / 86400000));
  if (delayDays === 0) {
    return {
      label: "Tagesgleich erstellt",
      delayDays,
    };
  }
  if (delayDays === 1) {
    return {
      label: "Am Folgetag erstellt",
      delayDays,
    };
  }
  return {
    label: `Verspätet erstellt (${delayDays} Tage)`,
    delayDays,
  };
}

function setText(node, value, fallback = "-") {
  if (!node) return;
  const content = String(value || "").trim();
  node.textContent = content || fallback;
}

function updatePrintMeta() {
  const entry = getActiveEntry();
  const project = getActiveProject();
  const projectName = el.projectName ? el.projectName.value.trim() : project?.name || "";
  const projectNumber = el.projectNumber ? el.projectNumber.value.trim() : project?.number || "";
  const siteManager = el.siteManager ? el.siteManager.value.trim() : project?.manager || "";

  setText(el.printProjectName, projectName);
  setText(el.printProjectNumber, projectNumber);
  setText(el.printSiteManager, siteManager);
  setText(el.printEntryDate, entry ? fmtEntryDate(entry.date) : "");
  setText(el.printWeather, entry ? entry.weather : "");
  const createdAtLabel = entry?.savedAt
    ? fmt(entry.savedAt)
    : new Date().toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" });
  setText(
    el.printGeneratedAt,
    createdAtLabel
  );
}

function toPrintText(value, fallback = "-") {
  const text = String(value == null ? "" : value).trim();
  return text || fallback;
}

function formatCompanyWorkerPrintLines(items = []) {
  const groups = buildCompanyWorkerGroups(items);
  return groups.map((group) => {
    const groupedCount = group.employees.length + group.legacyCount;
    const employeeParts = group.employees.map((employee) => {
      const name = toPrintText(employee.name, "Ohne Namen");
      const time = formatCompanyWorkerPersonTime(employee);
      return `${name} ${time}`;
    });
    if (group.legacyCount > 0) {
      employeeParts.push(`${group.legacyCount} Person(en) ohne Namen`);
    }
    return `${toPrintText(group.company, "-")} - ${groupedCount} Mitarbeiter | Gewerk: ${toPrintText(
      group.trades.join(", "),
      "-"
    )} | Ansprechpartner: ${toPrintText(group.contacts.join(", "), "-")} | Einteilung: ${
      employeeParts.length ? employeeParts.join("; ") : "-"
    }`;
  });
}

function buildEntryPhotoCaption(photo, fallbackLabel = "Foto") {
  const description = String(photo?.description || "").trim();
  const location = String(photo?.location || "").trim();
  if (description && location) return `${description} | ${location}`;
  if (description) return description;
  if (location) return `Ort: ${location}`;
  return toPrintText(photo?.name, fallbackLabel);
}

function createPrintMetaItem(label, value) {
  const item = document.createElement("div");
  item.className = "print-meta-item";
  const labelEl = document.createElement("span");
  labelEl.textContent = label;
  const valueEl = document.createElement("strong");
  valueEl.textContent = toPrintText(value);
  item.appendChild(labelEl);
  item.appendChild(valueEl);
  return item;
}

function createPrintField(label, value, multiline = false) {
  const field = document.createElement("div");
  field.className = "print-field";
  const title = document.createElement("h4");
  title.textContent = label;
  const content = document.createElement(multiline ? "div" : "p");
  content.className = multiline ? "print-field-value print-field-value-multiline" : "print-field-value";
  content.textContent = toPrintText(value);
  field.appendChild(title);
  field.appendChild(content);
  return field;
}

function createPrintListField(label, items = []) {
  const field = document.createElement("div");
  field.className = "print-field";
  const title = document.createElement("h4");
  title.textContent = label;
  field.appendChild(title);

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "print-field-value";
    empty.textContent = "Keine Einträge";
    field.appendChild(empty);
    return field;
  }

  const list = document.createElement("ul");
  list.className = "print-list";
  for (const itemText of items) {
    const item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  }
  field.appendChild(list);
  return field;
}

function createPrintPage(title, subtitle = "") {
  const page = document.createElement("section");
  page.className = "print-page";
  const header = document.createElement("header");
  header.className = "print-page-header";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  header.appendChild(h2);
  if (subtitle) {
    const p = document.createElement("p");
    p.className = "print-page-subtitle";
    p.textContent = subtitle;
    header.appendChild(p);
  }
  page.appendChild(header);
  return page;
}

function createPrintSection(title) {
  const section = document.createElement("section");
  section.className = "print-block";
  const h3 = document.createElement("h3");
  h3.textContent = title;
  section.appendChild(h3);
  return section;
}

function preparePrintReport() {
  if (!el.printReport) return;
  const project = ensureActiveProjectId();
  const entry = getActiveEntry();
  el.printReport.innerHTML = "";
  if (!project || !entry) return;

  const projectName = el.projectName ? el.projectName.value.trim() : project.name || "";
  const projectNumber = el.projectNumber ? el.projectNumber.value.trim() : project.number || "";
  const siteManager = el.siteManager ? el.siteManager.value.trim() : project.manager || "";
  const generatedAt = new Date().toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" });
  const savedAtLabel = entry.savedAt ? fmt(entry.savedAt) : generatedAt;
  const timelinessInfo = getReportTimelinessInfo(entry);
  const photos = Array.isArray(entry.photos)
    ? entry.photos
        .map((photo) => ({
          ...photo,
          source: resolvePhotoSource(photo),
        }))
        .filter((photo) => photo.source)
    : [];

  const fragment = document.createDocumentFragment();
  const page = createPrintPage("Baustellentagebuch - Tagesbericht", "Formeller Baustellenbericht");
  const meta = document.createElement("div");
  meta.className = "print-meta-grid";
  meta.appendChild(createPrintMetaItem("Projektname", projectName));
  meta.appendChild(createPrintMetaItem("Projekt-Nr.", projectNumber));
  meta.appendChild(createPrintMetaItem("Bauleitung", siteManager));
  meta.appendChild(createPrintMetaItem("Berichtsdatum", fmtEntryDate(entry.date)));
  meta.appendChild(createPrintMetaItem("Wetter", entry.weather));
  meta.appendChild(createPrintMetaItem("Erstellt am", savedAtLabel));
  page.appendChild(meta);

  const general = createPrintSection("1. Allgemeine Angaben");
  general.appendChild(createPrintField("Datum", fmtEntryDate(entry.date)));
  general.appendChild(createPrintField("Wetter", entry.weather));
  general.appendChild(createPrintField("Bericht erstellt am", savedAtLabel));
  general.appendChild(createPrintField("Friststatus", timelinessInfo.label));
  page.appendChild(general);

  const personnel = createPrintSection("2. Firmen, Gewerke und Personal");
  personnel.appendChild(createPrintField("Mitarbeiter vor Ort", entry.workers));
  const companyItems = formatCompanyWorkerPrintLines(entry.companyWorkers);
  personnel.appendChild(createPrintListField("Firmenliste", companyItems));
  const tradeTimeLines = buildTradeTimeSummaryLines(entry.companyWorkers);
  personnel.appendChild(createPrintListField("Arbeitszeiten pro Gewerk", tradeTimeLines));
  const tradeMinutesTotal = getCompanyWorkersTotalMinutes(entry.companyWorkers);
  if (tradeMinutesTotal > 0) {
    personnel.appendChild(createPrintField("Gesamtstunden aus Gewerkzeiten", `${formatHoursFromMinutes(tradeMinutesTotal)} h`));
  }
  page.appendChild(personnel);

  const progress = createPrintSection("3. Leistungsbeschreibung");
  const locationWorkItems = Array.isArray(entry.locationWorkItems) ? entry.locationWorkItems : [];
  progress.appendChild(
    createPrintListField(
      "Leistungspositionen nach Ort",
      locationWorkItems.map((item) => formatLocationWorkItemPrintLine(item))
    )
  );
  progress.appendChild(createPrintField("Mengen / Baufortschritt", entry.workQuantities, true));
  progress.appendChild(createPrintField("Störungen / Hindernisse", entry.issues, true));
  progress.appendChild(createPrintField("Nächste Schritte", entry.nextSteps, true));
  page.appendChild(progress);

  const logistics = createPrintSection("4. Materiallieferungen und Geräte");
  logistics.appendChild(createPrintField("Materiallieferungen", entry.materialDeliveries, true));
  logistics.appendChild(createPrintField("Eingesetzte Geräte / Maschinen", entry.equipmentUsed, true));
  page.appendChild(logistics);

  const visitors = createPrintSection("5. Baustellenbesucher");
  visitors.appendChild(createPrintField("Besucher", entry.siteVisitors, true));
  page.appendChild(visitors);

  const todos = createPrintSection("6. Offene Punkte");
  const todoItems = Array.isArray(entry.todos) ? entry.todos.map((item) => item.text) : [];
  todos.appendChild(createPrintListField("Aufgabenliste", todoItems));
  page.appendChild(todos);

  const photoSection = createPrintSection("7. Fotoanhang");
  if (!photos.length) {
    photoSection.appendChild(createPrintField("Fotos", "Keine Fotos hinterlegt"));
  } else {
    const grid = document.createElement("div");
    grid.className = "print-photo-grid";
    for (let photoIndex = 0; photoIndex < photos.length; photoIndex += 1) {
      const photo = photos[photoIndex];
      const figure = document.createElement("figure");
      figure.className = "print-photo-item";
      const img = document.createElement("img");
      img.src = photo.source;
      img.alt = photo.name || "Baufoto";
      const caption = document.createElement("figcaption");
      caption.textContent = buildEntryPhotoCaption(photo, `Foto ${photoIndex + 1}`);
      figure.appendChild(img);
      figure.appendChild(caption);
      grid.appendChild(figure);
    }
    photoSection.appendChild(grid);
  }
  page.appendChild(photoSection);

  const signatureSection = createPrintSection("Unterschrift Bauleitung");
  signatureSection.appendChild(createPrintField("Name Unterzeichner", entry.signatureSignerName));
  signatureSection.appendChild(createPrintField("Funktion", entry.signatureSignerRole));
  const signatureSource = getEntrySignatureSource(entry);
  if (signatureSource) {
    const preview = document.createElement("div");
    preview.className = "print-signature-preview";
    const image = document.createElement("img");
    image.src = signatureSource;
    image.alt = "Digitale Unterschrift";
    preview.appendChild(image);
    signatureSection.appendChild(preview);
  } else {
    signatureSection.appendChild(createPrintField("Digitale Unterschrift", "Keine Unterschrift erfasst"));
  }
  const signatureBlock = createPrintSection("8. Digitale Unterschrift");
  signatureBlock.appendChild(signatureSection);

  const lines = document.createElement("div");
  lines.className = "print-signature-grid";
  const lineLabels = [
    "Ort, Datum",
    "Unterschrift Bauleitung",
    "Unterschrift Auftraggeber",
    "Unterschrift Ausführende Firma",
  ];
  for (const label of lineLabels) {
    const item = document.createElement("div");
    item.className = "signature-item";
    const p = document.createElement("p");
    p.textContent = label;
    const line = document.createElement("div");
    line.className = "signature-line";
    item.appendChild(p);
    item.appendChild(line);
    lines.appendChild(item);
  }
  signatureBlock.appendChild(lines);
  page.appendChild(signatureBlock);

  fragment.appendChild(page);

  el.printReport.appendChild(fragment);
}

function switchActiveProject(projectId) {
  const nextProjectId = String(projectId || "").trim();
  if (!nextProjectId) return;
  const nextProject = state.projects.find((project) => project.id === nextProjectId);
  if (!nextProject) return;
  if (isBautagebuchVisible()) {
    pullInputsToActiveEntry();
  }
  state.activeProjectId = nextProject.id;
  ensureProjectMediaState(nextProject);
  syncProjectInputs();
  renderEntries();
  syncEntryInputs();
  setManageReportsStatus("");
  renderPhotoFolders();
  renderPhotos();
  syncWorkTimeInputs();
  renderWorkTimes();
  updateModuleAccessUi();
  persist();
}

function createNewProject() {
  if (denyForMitarbeiter("Als Mitarbeiter kannst du keine neue Baustelle anlegen.")) return;
  const project = createProject();
  state.projects.push(project);
  state.activeProjectId = project.id;
  syncProjectInputs();
  renderEntries();
  syncEntryInputs();
  renderPhotoFolders();
  renderPhotos();
  syncWorkTimeInputs();
  renderWorkTimes();
  persist();
  updateModuleAccessUi(
    "Neue Baustelle angelegt. Bitte Stammdaten eintragen und speichern.",
    "error"
  );
}

function saveProject() {
  if (denyForMitarbeiter("Als Mitarbeiter kannst du Projektstammdaten nicht ändern.")) return;
  const project = ensureActiveProjectId();
  if (!project) return;
  const name = el.projectName.value.trim();
  if (!name) {
    updateModuleAccessUi("Bitte einen Baustellennamen eintragen.", "error");
    return;
  }

  project.name = name;
  project.manager = el.siteManager.value.trim();
  project.number = el.projectNumber.value.trim();
  ensureProjectMediaState(project);
  renderProjectSelect();
  updatePrintMeta();
  persist();
  updateModuleAccessUi(`Baustelle gespeichert: ${name}`, "success");
}

function addEntry() {
  const project = ensureActiveProjectId();
  if (!project) return;
  const entry = emptyEntry();
  project.entries.unshift(entry);
  project.activeEntryId = entry.id;
  persist();
  renderEntries();
  syncEntryInputs();
  if (el.manageDateDelete) el.manageDateDelete.value = entry.date || "";
  setManageReportsStatus("Neuer Tagesbericht angelegt (Entwurf).", "success");
}

function saveEntry() {
  pullInputsToActiveEntry();
  if (autoSaveDraft.timer) {
    window.clearTimeout(autoSaveDraft.timer);
    autoSaveDraft.timer = null;
  }
  const entry = getActiveEntry();
  if (!entry) return;
  entry.savedAt = new Date().toISOString();
  const timelinessInfo = getReportTimelinessInfo(entry);
  persist();
  renderEntries();
  syncEntryInputs();
  if (timelinessInfo.delayDays != null && timelinessInfo.delayDays > 1) {
    setManageReportsStatus(
      `Bericht gespeichert. Hinweis: ${timelinessInfo.label}. Bitte künftig tagesgleich oder spätestens am Folgetag erfassen.`,
      "error"
    );
  } else {
    setManageReportsStatus(`Bericht gespeichert (${timelinessInfo.label}).`, "success");
  }
}

function deleteEntry() {
  if (denyForMitarbeiter("Als Mitarbeiter kannst du Berichte nicht löschen.")) return;
  const project = ensureActiveProjectId();
  if (!project) return;
  if (project.entries.length === 1) {
    alert("Mindestens ein Bericht muss vorhanden sein.");
    return;
  }
  const entry = getActiveEntry();
  if (!entry) return;
  const ok = confirm("Diesen Tagesbericht wirklich löschen?");
  if (!ok) return;
  project.entries = project.entries.filter((x) => x.id !== entry.id);
  ensureProjectEntriesIntegrity(project);
  persist();
  renderEntries();
  syncEntryInputs();
  setManageReportsStatus("Bericht wurde gelöscht.", "success");
}

function deleteReportsByDate() {
  if (denyForMitarbeiter("Als Mitarbeiter kannst du Berichte nicht löschen.")) return;
  const project = ensureActiveProjectId();
  if (!project) return;

  const targetDate = String(el.manageDateDelete?.value || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) {
    setManageReportsStatus("Bitte ein gültiges Datum auswählen.", "error");
    return;
  }

  const matches = project.entries.filter((entry) => entry.date === targetDate);
  if (!matches.length) {
    setManageReportsStatus("Für dieses Datum wurden keine Berichte gefunden.", "error");
    return;
  }

  const ok = confirm(
    `${matches.length} Bericht(e) vom ${fmtEntryDate(targetDate)} wirklich löschen?`
  );
  if (!ok) return;

  project.entries = project.entries.filter((entry) => entry.date !== targetDate);
  ensureProjectEntriesIntegrity(project);
  persist();
  renderEntries();
  syncEntryInputs();
  setManageReportsStatus(
    `${matches.length} Bericht(e) vom ${fmtEntryDate(targetDate)} gelöscht.`,
    "success"
  );
}

function deleteDraftReports() {
  if (denyForMitarbeiter("Als Mitarbeiter kannst du Berichte nicht löschen.")) return;
  const project = ensureActiveProjectId();
  if (!project) return;

  const drafts = project.entries.filter((entry) => !entry.savedAt);
  if (!drafts.length) {
    setManageReportsStatus("Es sind keine Entwürfe vorhanden.", "error");
    return;
  }

  const ok = confirm(`${drafts.length} Entwurf/Entwürfe wirklich löschen?`);
  if (!ok) return;

  project.entries = project.entries.filter((entry) => Boolean(entry.savedAt));
  ensureProjectEntriesIntegrity(project);
  persist();
  renderEntries();
  syncEntryInputs();
  setManageReportsStatus(`${drafts.length} Entwurf/Entwürfe gelöscht.`, "success");
}

function addTodo(textValue = null) {
  const text = (textValue || el.todoInput.value).trim();
  if (!text) return;
  const entry = getActiveEntry();
  if (!entry) return;
  entry.todos.push({
    id: uid(),
    text,
    done: false,
  });
  if (!textValue) el.todoInput.value = "";
  renderTodos(entry);
  persist();
  updateStatus("Ungespeichert");
}

function updateWorkersFromCompanyList(entry) {
  const total = entry.companyWorkers.reduce((sum, item) => {
    const workerCount = item?.employeeName ? 1 : Math.max(1, Number(item?.count || 1));
    return sum + workerCount;
  }, 0);
  entry.workers = total > 0 ? String(total) : "";
  el.workers.value = entry.workers;
}

function upsertCompanyWorker(entry, companyInput, countInput, mode = "add") {
  const payload =
    typeof companyInput === "object" && companyInput
      ? {
          company: normalizeUserName(companyInput.company || ""),
          trade: normalizeUserName(companyInput.trade || ""),
          contact: normalizeUserName(companyInput.contact || ""),
          employeeName: normalizeUserName(companyInput.employeeName || ""),
          count: Math.round(Number(companyInput.count || 0)),
          shiftStart: /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(companyInput.shiftStart || ""))
            ? String(companyInput.shiftStart)
            : "",
          shiftEnd: /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(companyInput.shiftEnd || ""))
            ? String(companyInput.shiftEnd)
            : "",
          shiftBreakMinutes:
            Number(companyInput.shiftBreakMinutes) > 0
              ? String(normalizeBreakMinutes(companyInput.shiftBreakMinutes))
              : "",
        }
      : {
          company: normalizeUserName(companyInput || ""),
          trade: "",
          contact: "",
          employeeName: "",
          count: Math.round(Number(countInput || 0)),
          shiftStart: "",
          shiftEnd: "",
          shiftBreakMinutes: "",
        };

  const hasExplicitEmployee = Boolean(payload.employeeName);
  const normalizedCount =
    Number.isFinite(payload.count) && payload.count > 0 ? payload.count : hasExplicitEmployee ? 1 : 1;
  payload.count = normalizedCount;
  if (!payload.company) return;

  const keyCompany = payload.company.toLowerCase();
  const keyTrade = payload.trade.toLowerCase();
  const keyContact = payload.contact.toLowerCase();
  const keyEmployee = payload.employeeName.toLowerCase();
  const keyStart = payload.shiftStart;
  const keyEnd = payload.shiftEnd;
  const keyBreak = payload.shiftBreakMinutes;
  const existing = entry.companyWorkers.find(
    (item) =>
      item.company.toLowerCase() === keyCompany &&
      String(item.trade || "").toLowerCase() === keyTrade &&
      String(item.contact || "").toLowerCase() === keyContact &&
      String(item.employeeName || "").toLowerCase() === keyEmployee &&
      String(item.shiftStart || "") === keyStart &&
      String(item.shiftEnd || "") === keyEnd &&
      String(item.shiftBreakMinutes || "") === keyBreak
  );
  if (existing) {
    if (mode === "set") {
      existing.count = payload.count;
    } else if (!hasExplicitEmployee) {
      existing.count = existing.count + payload.count;
    } else {
      existing.count = 1;
    }
    if (payload.contact) existing.contact = payload.contact;
    if (payload.employeeName) existing.employeeName = payload.employeeName;
  } else {
    entry.companyWorkers.push({
      id: uid(),
      company: payload.company,
      trade: payload.trade,
      contact: payload.contact,
      employeeName: payload.employeeName,
      count: payload.count,
      shiftStart: payload.shiftStart,
      shiftEnd: payload.shiftEnd,
      shiftBreakMinutes: payload.shiftBreakMinutes,
    });
  }
}

function addCompanyWorker(
  companyValue = null,
  countValue = null,
  tradeValue = null,
  contactValue = null,
  shiftStartValue = null,
  shiftEndValue = null,
  shiftBreakValue = null,
  employeeNameValue = null
) {
  const entry = getActiveEntry();
  if (!entry) return false;

  const company = String((companyValue ?? el.companyNameInput?.value) || "").trim();
  const trade = (tradeValue || el.companyTradeInput?.value || "").trim();
  const contact = (contactValue || el.companyContactInput?.value || "").trim();
  const employeeName = String((employeeNameValue ?? el.companyEmployeeNameInput?.value) || "").trim();
  const countRaw = countValue ?? el.companyCountInput?.value ?? "1";
  const shiftStart = String((shiftStartValue ?? el.companyShiftStartInput?.value) || "").trim();
  const shiftEnd = String((shiftEndValue ?? el.companyShiftEndInput?.value) || "").trim();
  const shiftBreakRaw = shiftBreakValue ?? el.companyShiftBreakInput?.value ?? "";
  const shiftBreakMinutes =
    String(shiftBreakRaw || "").trim() === "" ? "" : String(normalizeBreakMinutes(shiftBreakRaw));
  const count = Number.isFinite(Math.round(Number(countRaw))) && Math.round(Number(countRaw)) > 0
    ? Math.round(Number(countRaw))
    : 1;
  if (!company) return false;
  if (!employeeName) {
    setManageReportsStatus("Bitte Mitarbeitername eintragen.", "error");
    return false;
  }

  upsertCompanyWorker(
    entry,
    {
      company,
      trade,
      contact,
      count,
      employeeName,
      shiftStart,
      shiftEnd,
      shiftBreakMinutes,
    },
    null,
    "add"
  );

  if (!companyValue) el.companyNameInput.value = "";
  if (el.companyTradeInput && !tradeValue) el.companyTradeInput.value = "";
  if (el.companyContactInput && !contactValue) el.companyContactInput.value = "";
  if (el.companyEmployeeNameInput && employeeNameValue == null) el.companyEmployeeNameInput.value = "";
  if (el.companyCountInput && countValue == null) el.companyCountInput.value = "";
  if (el.companyShiftStartInput && shiftStartValue == null) el.companyShiftStartInput.value = "";
  if (el.companyShiftEndInput && shiftEndValue == null) el.companyShiftEndInput.value = "";
  if (el.companyShiftBreakInput && shiftBreakValue == null) el.companyShiftBreakInput.value = "";

  updateWorkersFromCompanyList(entry);
  renderCompanyWorkers(entry);
  renderCompanyWorkerSuggestions();
  persist();
  updateStatus("Ungespeichert");
  return true;
}

function applyCompanyWorkerMentions(entry, hits, sourceText) {
  if (!hits.length) return { applied: false, total: 0 };
  const replaceAll =
    hits.length > 1 &&
    /(davon|verteilung|aufgeteilt|verteilt|insgesamt|gesamt|zusammen)/i.test(sourceText);

  if (replaceAll) {
    entry.companyWorkers = [];
  }

  for (const hit of hits) {
    upsertCompanyWorker(
      entry,
      {
        company: hit.company,
        count: hit.count,
      },
      null,
      "set"
    );
  }

  updateWorkersFromCompanyList(entry);
  renderCompanyWorkers(entry);
  renderCompanyWorkerSuggestions();
  const total = entry.companyWorkers.reduce((sum, item) => sum + Number(item.count || 0), 0);
  return { applied: true, total };
}

function exportJson() {
  if (denyForMitarbeiter("Als Mitarbeiter ist der JSON-Export nicht freigeschaltet.")) return;
  const project = getActiveProject();
  const filename = `${(project?.name || "bautagebuch").replace(/\s+/g, "_").toLowerCase()}.json`;
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

async function handlePhotos(event) {
  const files = Array.from(event.target.files || []);
  await appendPhotoFiles(files);
  event.target.value = "";
}

async function handleEntryPhotos(event) {
  const files = Array.from(event.target.files || []);
  await appendEntryPhotoFiles(files);
  event.target.value = "";
}

async function appendEntryPhotoFiles(files) {
  if (!files.length) return;
  if (!cloud.connected || !cloud.client || !cloud.workspaceKey) {
    setCloudStatus("Bitte zuerst Cloud verbinden. Fotos werden nur in der Cloud gespeichert.", "error");
    return;
  }
  const project = ensureActiveProjectId();
  if (!project) return;
  const entry = getActiveEntry();
  if (!entry) return;
  if (!Array.isArray(entry.photos)) entry.photos = [];
  const projectId = sanitizeStorageSegment(project.id, "project");
  const entryId = sanitizeStorageSegment(entry.id, "entry");
  let addedCount = 0;
  let failedCount = 0;

  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const dataUrl = await toOptimizedPhotoDataUrl(file, {
      maxEdge: 1400,
      jpegQuality: 0.72,
      reencodeAboveBytes: 350 * 1024,
    });
    const photoId = uid();
    const ext = getDataUrlFileExtension(dataUrl);
    const targetPath = `${cloud.workspaceKey}/projects/${projectId}/entries/${entryId}/photos/${photoId}.${ext}`;
    const cloudPath = await tryUploadPhotoDataUrl(dataUrl, targetPath);
    if (!cloudPath) {
      failedCount += 1;
      continue;
    }
    entry.photos.push({
      id: photoId,
      name: file.name,
      dataUrl: "",
      cloudPath,
      description: "",
      location: "",
    });
    addedCount += 1;
  }

  if (addedCount > 0) {
    renderEntryPhotos(entry);
    persist();
    updateStatus("Ungespeichert");
  }
  if (failedCount > 0) {
    setCloudStatus(`Einige Fotos konnten nicht hochgeladen werden (${failedCount}).`, "error");
  } else if (addedCount > 0) {
    setCloudStatus(`${addedCount} Foto(s) in der Cloud gespeichert.`, "success");
  }
}

async function appendPhotoFiles(files) {
  if (!files.length) return;
  if (!cloud.connected || !cloud.client || !cloud.workspaceKey) {
    setCloudStatus("Bitte zuerst Cloud verbinden. Fotos werden nur in der Cloud gespeichert.", "error");
    return;
  }
  const project = ensureActiveProjectId();
  if (!project) return;
  ensureProjectMediaState(project);
  const activeFolderId = project.activePhotoFolderId || DEFAULT_PHOTO_FOLDER_ID;
  const projectId = sanitizeStorageSegment(project.id, "project");
  const folderId = sanitizeStorageSegment(activeFolderId, DEFAULT_PHOTO_FOLDER_ID);
  let addedCount = 0;
  let failedCount = 0;

  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const dataUrl = await toOptimizedPhotoDataUrl(file, {
      maxEdge: 1800,
      jpegQuality: 0.8,
      reencodeAboveBytes: 800 * 1024,
    });
    const photoId = uid();
    const ext = getDataUrlFileExtension(dataUrl);
    const targetPath = `${cloud.workspaceKey}/projects/${projectId}/folders/${folderId}/${photoId}.${ext}`;
    const cloudPath = await tryUploadPhotoDataUrl(dataUrl, targetPath);
    if (!cloudPath) {
      failedCount += 1;
      continue;
    }
    project.photos.push({
      id: photoId,
      name: file.name,
      dataUrl: "",
      cloudPath,
      folderId: activeFolderId,
    });
    addedCount += 1;
  }

  if (addedCount > 0) {
    renderPhotoFolders();
    renderPhotos();
    persist();
    updateStatus("Ungespeichert");
  }
  if (failedCount > 0) {
    setCloudStatus(`Einige Fotos konnten nicht hochgeladen werden (${failedCount}).`, "error");
  } else if (addedCount > 0) {
    setCloudStatus(`${addedCount} Foto(s) in der Cloud gespeichert.`, "success");
  }
}

function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Bild konnte nicht gelesen werden."));
    image.src = dataUrl;
  });
}

async function toOptimizedPhotoDataUrl(file, options = {}) {
  const originalDataUrl = await toDataUrl(file);
  try {
    const image = await loadImageFromDataUrl(originalDataUrl);
    const width = Number(image.naturalWidth || image.width || 0);
    const height = Number(image.naturalHeight || image.height || 0);
    if (!width || !height) return originalDataUrl;

    const maxEdge = Number(options.maxEdge) > 0 ? Number(options.maxEdge) : 1800;
    const reencodeAboveBytes =
      Number(options.reencodeAboveBytes) > 0 ? Number(options.reencodeAboveBytes) : 900 * 1024;
    const jpegQuality =
      Number(options.jpegQuality) >= 0.4 && Number(options.jpegQuality) <= 0.95
        ? Number(options.jpegQuality)
        : 0.82;
    const scale = Math.min(1, maxEdge / Math.max(width, height));
    const shouldReencode = scale < 1 || Number(file?.size || 0) > reencodeAboveBytes;
    if (!shouldReencode) return originalDataUrl;

    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) return originalDataUrl;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    const optimizedDataUrl = canvas.toDataURL("image/jpeg", jpegQuality);
    if (!optimizedDataUrl || optimizedDataUrl.length >= originalDataUrl.length) {
      return originalDataUrl;
    }
    return optimizedDataUrl;
  } catch (_) {
    return originalDataUrl;
  }
}

async function tryUploadPhotoDataUrl(dataUrl, path) {
  try {
    return await uploadDataUrlToCloud(dataUrl, path);
  } catch (error) {
    setCloudStatus(`Cloud-Fehler: ${getCloudErrorMessage(error, "Foto-Upload fehlgeschlagen.")}`, "error");
    return "";
  }
}

function getSignatureCanvasSize(canvas) {
  const rect = canvas.getBoundingClientRect();
  const cssWidth = Math.max(1, Math.round(rect.width || canvas.clientWidth || 1));
  const cssHeight = Math.max(1, Math.round(rect.height || canvas.clientHeight || 190));
  const dpr = Math.max(window.devicePixelRatio || 1, 1);
  return { cssWidth, cssHeight, dpr };
}

function ensureSignatureContext() {
  const canvas = el.signatureCanvas;
  if (!canvas) return null;
  const { cssWidth, cssHeight, dpr } = getSignatureCanvasSize(canvas);
  const pixelWidth = Math.round(cssWidth * dpr);
  const pixelHeight = Math.round(cssHeight * dpr);
  if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#162436";
  ctx.fillStyle = "#162436";
  ctx.lineWidth = 2.2;
  signaturePad.ctx = ctx;
  return ctx;
}

function clearSignatureSurface() {
  const canvas = el.signatureCanvas;
  const ctx = ensureSignatureContext();
  if (!canvas || !ctx) return;
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function renderSignature(dataUrl = "") {
  const canvas = el.signatureCanvas;
  const ctx = ensureSignatureContext();
  if (!canvas || !ctx) return;

  const token = ++signaturePad.renderToken;
  clearSignatureSurface();
  signaturePad.hasInk = Boolean(dataUrl);

  if (!dataUrl) return;
  const image = new Image();
  image.onload = () => {
    if (token !== signaturePad.renderToken) return;
    const size = getSignatureCanvasSize(canvas);
    clearSignatureSurface();
    const ratio = Math.min(size.cssWidth / image.width, size.cssHeight / image.height);
    const drawWidth = Math.max(1, image.width * ratio);
    const drawHeight = Math.max(1, image.height * ratio);
    const offsetX = (size.cssWidth - drawWidth) / 2;
    const offsetY = (size.cssHeight - drawHeight) / 2;
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };
  image.src = dataUrl;
}

function getCanvasPointFromClient(clientX, clientY) {
  const canvas = el.signatureCanvas;
  const rect = canvas.getBoundingClientRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function drawSignatureDot(x, y) {
  const ctx = ensureSignatureContext();
  if (!ctx) return;
  const radius = ctx.lineWidth / 2;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function startSignatureStroke(clientX, clientY) {
  const point = getCanvasPointFromClient(clientX, clientY);
  signaturePad.drawing = true;
  signaturePad.lastPoint = point;
  signaturePad.hasInk = true;
  drawSignatureDot(point.x, point.y);
}

function moveSignatureStroke(clientX, clientY) {
  if (!signaturePad.drawing) return;
  const ctx = ensureSignatureContext();
  if (!ctx) return;
  const point = getCanvasPointFromClient(clientX, clientY);
  const from = signaturePad.lastPoint || point;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
  signaturePad.lastPoint = point;
}

function persistSignatureToEntry() {
  const entry = getActiveEntry();
  const canvas = el.signatureCanvas;
  if (!entry || !canvas) return;
  entry.signatureDataUrl = signaturePad.hasInk ? canvas.toDataURL("image/png") : "";
  entry.signatureCloudPath = "";
  persist();
  updateStatus("Ungespeichert");
}

function endSignatureStroke() {
  if (!signaturePad.drawing) return;
  signaturePad.drawing = false;
  signaturePad.lastPoint = null;
  persistSignatureToEntry();
}

function clearSignature() {
  signaturePad.drawing = false;
  signaturePad.pointerId = null;
  signaturePad.lastPoint = null;
  signaturePad.hasInk = false;
  clearSignatureSurface();
  persistSignatureToEntry();
}

function onSignatureCanvasResize() {
  if (signaturePad.resizeTimer) {
    window.clearTimeout(signaturePad.resizeTimer);
  }
  signaturePad.resizeTimer = window.setTimeout(() => {
    const entry = getActiveEntry();
    renderSignature(entry ? getEntrySignatureSource(entry) : "");
  }, 120);
}

function extractNumber(text, regex) {
  const match = text.match(regex);
  if (!match) return "";
  const found = match.slice(1).find((part) => /^\d{1,3}$/.test(String(part || "").trim()));
  if (!found) return "";
  return String(found);
}

function extractWeather(textLower) {
  if (/(sonnig|klar)/.test(textLower)) return "Sonnig";
  if (/(regen|nass|schauer)/.test(textLower)) return "Regen";
  if (/(bewoelkt|bewölkt|wolkig|bedeckt)/i.test(textLower)) return "Bewölkt";
  if (/(schnee|frost)/.test(textLower)) return "Schnee";
  if (/(sturm|windig|orkan)/.test(textLower)) return "Sturm";
  return "";
}

function splitNonEmptyLines(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeLineForKey(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,;:!?]+$/g, "")
    .trim();
}

function ensureLinePunctuation(text) {
  const line = String(text || "").replace(/\s+/g, " ").trim();
  if (!line) return "";
  return /[.!?]$/.test(line) ? line : `${line}.`;
}

function appendUniqueLines(current, lines, maxLines = 120) {
  const existing = splitNonEmptyLines(current);
  const keys = new Set(existing.map(normalizeLineForKey));
  const out = [...existing];

  for (const line of lines) {
    const clean = ensureLinePunctuation(line);
    if (!clean) continue;
    const key = normalizeLineForKey(clean);
    if (!key || keys.has(key)) continue;
    keys.add(key);
    out.push(clean);
    if (out.length >= maxLines) break;
  }

  return out.join("\n");
}

function rewriteDictationText(text) {
  let cleaned = text
    .replace(/\s+/g, " ")
    .replace(/\b(ähm+|hm+|also|halt|quasi|sozusagen)\b/gi, "")
    .replace(/\s+,/g, ",")
    .replace(/\s+\./g, ".")
    .replace(/\s+:/g, ":")
    .replace(/\s+;/g, ";")
    .trim();

  if (!cleaned) return "";
  cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  if (!/[.!?]$/.test(cleaned)) cleaned += ".";

  return cleaned
    .split(/([.!?]\s*)/g)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
    .replace(/\s+([.!?])/g, "$1")
    .trim();
}

function normalizeSentenceCore(sentence) {
  return sentence
    .replace(/^\s*(und|dann|also|okay|ok|ja)\s+/i, "")
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "")
    .trim();
}

function capitalizeFirst(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function toFormalReportSentence(sentence, section) {
  const coreRaw = normalizeSentenceCore(sentence);
  if (!coreRaw) return "";
  const core = capitalizeFirst(coreRaw);
  if (/^(Es|Als|Die|Der|Im|Am|Auf|Für|Zur|Nach)\b/.test(core)) {
    return ensureLinePunctuation(core);
  }

  if (section === "issues") {
    return `Es wurde folgende Behinderung dokumentiert: ${core}.`;
  }
  if (section === "next") {
    return `Als nächster Schritt ist vorgesehen: ${core}.`;
  }
  if (section === "allocation") {
    return `Personaleinsatz: ${core}.`;
  }
  return `Es wurde dokumentiert: ${core}.`;
}

function formatFormalReportText(text, section, maxLines = 2) {
  const summary = summarizeImportant(text, maxLines);
  const sentences = splitSentences(summary);
  if (!sentences.length) return "";

  return sentences
    .map((sentence) => toFormalReportSentence(sentence, section))
    .filter(Boolean)
    .join("\n");
}

function normalizeSpokenNumbers(text) {
  const replacements = [
    [/\bnull\b/gi, "0"],
    [/\bein(?:e|en|er|em|es)?\b/gi, "1"],
    [/\beins\b/gi, "1"],
    [/\bzwei\b/gi, "2"],
    [/\bdrei\b/gi, "3"],
    [/\bvier\b/gi, "4"],
    [/\bfünf\b/gi, "5"],
    [/\bfuenf\b/gi, "5"],
    [/\bsechs\b/gi, "6"],
    [/\bsieben\b/gi, "7"],
    [/\bacht\b/gi, "8"],
    [/\bneun\b/gi, "9"],
    [/\bzehn\b/gi, "10"],
    [/\belf\b/gi, "11"],
    [/\bzwölf\b/gi, "12"],
    [/\bzwoelf\b/gi, "12"],
    [/\bdreizehn\b/gi, "13"],
    [/\bvierzehn\b/gi, "14"],
    [/\bfünfzehn\b/gi, "15"],
    [/\bfuenfzehn\b/gi, "15"],
    [/\bsechzehn\b/gi, "16"],
    [/\bsiebzehn\b/gi, "17"],
    [/\bachtzehn\b/gi, "18"],
    [/\bneunzehn\b/gi, "19"],
    [/\bzwanzig\b/gi, "20"],
  ];

  let normalized = text;
  for (const [pattern, digit] of replacements) {
    normalized = normalized.replace(pattern, digit);
  }
  return normalized;
}

function splitSentences(text) {
  return text
    .split(/[.!?]\s+|[.!?]$/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function scoreSentence(sentence) {
  let score = 0;
  if (/\d/.test(sentence)) score += 2;
  if (/(problem|stoer|stör|hinder|verzug|fehlt|mangel|warten)/i.test(sentence)) score += 3;
  if (/(heute|montage|beton|installation|lieferung|abnahme|pruefung)/i.test(sentence)) score += 2;
  if (/(morgen|naechste|nächste|anschliessend|anschließend|danach|als naechstes|als nächstes|planen)/i.test(sentence)) score += 2;
  return score;
}

function summarizeImportant(text, maxLines = 3) {
  const sentences = splitSentences(text);
  if (!sentences.length) return text;

  const ranked = sentences
    .map((sentence, index) => ({ sentence, index, score: scoreSentence(sentence) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, maxLines)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.sentence);

  if (!ranked.length) {
    return sentences.slice(0, maxLines).join(". ") + ".";
  }
  return ranked.join(". ") + ".";
}

function extractRelevantSummary(text, signalRegex) {
  const sentences = splitSentences(text).filter((sentence) => signalRegex.test(sentence));
  if (!sentences.length) return "";
  return summarizeImportant(sentences.join(". "), 2);
}

function normalizeTextList(values, maxItems = 12, mapValue = null) {
  if (!Array.isArray(values)) return [];
  const cleaned = values
    .map((item) => String(item || "").replace(/\s+/g, " ").trim())
    .map((item) => (typeof mapValue === "function" ? mapValue(item) : item))
    .filter(Boolean);
  const unique = [];
  const seen = new Set();
  for (const item of cleaned) {
    const key = normalizeLineForKey(item);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
    if (unique.length >= maxItems) break;
  }
  return unique;
}

function normalizeLocationLabel(value) {
  let normalized = String(value || "")
    .replace(/\s+/g, " ")
    .replace(/\bwhg\b/gi, "Wohnung")
    .replace(/\bobergeschoss\b/gi, "OG")
    .replace(/\berdgeschoss\b/gi, "EG")
    .replace(/\bkellergeschoss\b/gi, "KG")
    .replace(/\buntergeschoss\b/gi, "UG")
    .trim();

  normalized = normalized
    .replace(/\b(\d{1,2})\s*\.?\s*og\b/gi, "$1. OG")
    .replace(/\b(\d{1,2})\s*\.?\s*ug\b/gi, "$1. UG")
    .replace(/\bog\s*(\d{1,2})\b/gi, "$1. OG")
    .replace(/\bug\s*(\d{1,2})\b/gi, "$1. UG")
    .replace(/\bwohnung\s*(\d{1,3})\b/gi, "Wohnung $1")
    .replace(/\btreppenhaus\s*([a-z0-9]+)\b/gi, (_, token) => `Treppenhaus ${String(token).toUpperCase()}`)
    .replace(/\bachse\s*([a-z]\d{0,2})\b/gi, (_, token) => `Achse ${String(token).toUpperCase()}`)
    .replace(/\bbereich\s+([a-z0-9][a-z0-9\- ]{0,24})\b/gi, (_, token) => {
      const clean = String(token).replace(/\s+/g, " ").trim();
      return clean ? `Bereich ${capitalizeFirst(clean.toLowerCase())}` : "";
    })
    .replace(/[;]+/g, ",")
    .replace(/\s+,/g, ",")
    .replace(/,+/g, ",")
    .trim();

  if (!normalized) return "";
  return capitalizeFirst(normalized);
}

function normalizeLocationList(values, maxItems = 16) {
  return normalizeTextList(values, maxItems, normalizeLocationLabel);
}

function normalizeStaffAllocationLine(value) {
  let line = String(value || "").replace(/\s+/g, " ").trim();
  if (!line) return "";
  line = line
    .replace(/\bmitarbeiter\b/gi, "MA")
    .replace(/\bpersonen\b/gi, "MA")
    .replace(/\s+-\s+/g, " - ")
    .replace(/\s+:\s+/g, ": ")
    .trim();
  return ensureLinePunctuation(line);
}

function extractLocationMentionsHeuristic(text) {
  const hits = [];
  const patterns = [
    /\b\d{1,2}\s*\.?\s*(?:og|obergeschoss)\s*(?:wohnung|whg|einheit)\s*\d{1,3}\b/gi,
    /\b(?:eg|kg|ug|erdgeschoss|keller|dachgeschoss)\s*(?:wohnung|whg|einheit)\s*\d{1,3}\b/gi,
    /\b\d{1,2}\.\s*(?:og|obergeschoss)\b/gi,
    /\b(?:eg|erdgeschoss|kg|keller|dachgeschoss)\b/gi,
    /\bwohnung\s*\d{1,3}\b/gi,
    /\braum\s*\d{1,3}\b/gi,
    /\btreppenhaus\s*[a-z0-9]+\b/gi,
    /\bachse\s*[a-z0-9]+\b/gi,
    /\bbereich\s*[a-z0-9][a-z0-9\- ]{0,24}\b/gi,
    /\b(?:block|haus)\s*[a-z0-9]+\b/gi,
  ];

  for (const pattern of patterns) {
    const matches = text.match(pattern);
    if (matches?.length) {
      hits.push(...matches);
    }
  }
  return normalizeLocationList(hits, 16);
}

function mergeLocationLines(currentText, incomingLocations) {
  const existing = normalizeLocationList(String(currentText || "").split(/\n+/), 30);
  const incoming = normalizeLocationList(incomingLocations, 30);
  const merged = normalizeLocationList([...existing, ...incoming], 30);
  return merged.join("\n");
}

function mergeStaffAllocationLines(currentText, incomingLines) {
  const existing = normalizeTextList(
    String(currentText || "").split(/\n+/),
    60,
    normalizeStaffAllocationLine
  );
  const incoming = normalizeTextList(incomingLines, 60, normalizeStaffAllocationLine);
  return appendUniqueLines(existing.join("\n"), incoming, 60);
}

function extractStaffAllocationHeuristic(text) {
  const hits = [];
  const patterns = [
    /(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50}?)\s*(?:mit|hat|stellt|:)?\s*(\d{1,3})\s*(?:mitarbeiter|arbeiter|personen|mann|leute|ma)?\s*(?:im|in|auf|an)\s*([^,.;\n]+?)(?=,|;|\.|\bund\b|$)/gi,
    /(\d{1,3})\s*(?:mitarbeiter|arbeiter|personen|mann|leute|ma)\s*(?:von|bei)\s*(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50}?)\s*(?:im|in|auf|an)\s*([^,.;\n]+?)(?=,|;|\.|\bund\b|$)/gi,
  ];

  for (const pattern of patterns) {
    let match = pattern.exec(text);
    while (match) {
      const company = sanitizeCompanyName(pattern === patterns[0] ? match[1] : match[2]);
      const count = Number(pattern === patterns[0] ? match[2] : match[1]);
      const location = normalizeLocationLabel(match[3] || "");
      if (company && Number.isFinite(count) && count > 0 && location) {
        hits.push(`${company}: ${count} MA in ${location}`);
      }
      match = pattern.exec(text);
    }
  }

  return normalizeTextList(hits, 20, normalizeStaffAllocationLine);
}

function addTodosToEntry(entry, todoLines) {
  const normalized = normalizeTextList(todoLines, 30);
  if (!normalized.length) return 0;
  const existing = new Set(entry.todos.map((todo) => todo.text.toLowerCase()));
  let added = 0;
  for (const text of normalized) {
    const key = text.toLowerCase();
    if (existing.has(key)) continue;
    existing.add(key);
    entry.todos.push({
      id: uid(),
      text,
      done: false,
    });
    added += 1;
  }
  return added;
}

function parseSpeechToEntryFallback(text) {
  const entry = getActiveEntry();
  if (!entry) return { summary: "Kein aktiver Bericht." };

  const polishedText = rewriteDictationText(text);
  const normalizedForParsing = normalizeSpokenNumbers(polishedText);
  const lower = normalizedForParsing.toLowerCase();
  const condensedText = summarizeImportant(polishedText, 3);
  const updates = [];

  const weather = extractWeather(lower);
  if (weather) {
    entry.weather = weather;
    updates.push(`Wetter: ${weather}`);
  }

  const companyHits = extractCompanyWorkerMentions(normalizedForParsing);
  if (companyHits.length) {
    const companyApply = applyCompanyWorkerMentions(entry, companyHits, normalizedForParsing);
    updates.push(
      `Firmen: ${companyHits.map((hit) => `${hit.company} (${hit.count})`).join(", ")} | Gesamt: ${companyApply.total}`
    );
  } else {
    const workers = extractNumber(
      lower,
      /(?:insgesamt|gesamt|gesamtzahl|summe|waren)\s*(\d{1,3})\s*(mitarbeiter|arbeiter|kollegen|personen|mann|leute)\b|(\d{1,3})\s*(mitarbeiter|arbeiter|kollegen|personen|mann|leute)\b/i
    );
    if (workers) {
      entry.workers = workers;
      updates.push(`Mitarbeiter: ${workers}`);
    }
  }

  const locationHits = extractLocationMentionsHeuristic(normalizedForParsing);
  if (locationHits.length) {
    entry.locations = mergeLocationLines(entry.locations, locationHits);
    updates.push(`Orte: ${locationHits.join(", ")}`);
  }

  const allocationHits = extractStaffAllocationHeuristic(normalizedForParsing);
  if (allocationHits.length) {
    const formalAllocation = allocationHits.map((line) => toFormalReportSentence(line, "allocation"));
    entry.staffAllocation = mergeStaffAllocationLines(entry.staffAllocation, formalAllocation);
    updates.push("Verteilung übernommen");
  } else if (companyHits.length && locationHits.length) {
    const synthesized = companyHits.map((item) => `${item.company}: ${item.count} MA in ${locationHits[0]}`);
    const formalSynthesized = synthesized.map((line) => toFormalReportSentence(line, "allocation"));
    entry.staffAllocation = mergeStaffAllocationLines(entry.staffAllocation, formalSynthesized);
    updates.push("Verteilung abgeleitet");
  }

  const issueSignal = /(problem|stoer|stör|hinder|verzug|fehlt|warten)/i;
  const nextSignal = /(morgen|naechste|nächste|als naechstes|als nächstes|weiter geht|planen)/i;
  const issueSummary = extractRelevantSummary(
    polishedText,
    /(problem|stoer|stör|hinder|verzug|fehlt|mangel|warten)/i
  );
  const nextSummary = extractRelevantSummary(
    polishedText,
    /(morgen|naechste|nächste|als naechstes|als nächstes|weiter geht|planen|anschliessend|anschließend|danach)/i
  );

  if (issueSignal.test(lower)) {
    entry.issues = appendUniqueLines(
      entry.issues,
      splitNonEmptyLines(formatFormalReportText(issueSummary || condensedText, "issues", 2)),
      120
    );
    updates.push("Störungen erweitert");
  }
  if (nextSignal.test(lower)) {
    entry.nextSteps = appendUniqueLines(
      entry.nextSteps,
      splitNonEmptyLines(formatFormalReportText(nextSummary || condensedText, "next", 2)),
      120
    );
    updates.push("Nächste Schritte erweitert");
  }
  if (!issueSignal.test(lower) && !nextSignal.test(lower)) {
    entry.workDone = appendUniqueLines(
      entry.workDone,
      splitNonEmptyLines(formatFormalReportText(condensedText, "work", 3)),
      140
    );
    updates.push("Ausgeführte Arbeiten erweitert");
  } else {
    const remainingSummary = summarizeImportant(
      splitSentences(polishedText)
        .filter((line) => !/(problem|stoer|stör|hinder|verzug|fehlt|mangel|warten)/i.test(line))
        .filter(
          (line) =>
            !/(morgen|naechste|nächste|als naechstes|als nächstes|weiter geht|planen|anschliessend|anschließend|danach)/i.test(
              line
            )
        )
        .join(". "),
      2
    );
    if (remainingSummary && remainingSummary !== ".") {
      entry.workDone = appendUniqueLines(
        entry.workDone,
        splitNonEmptyLines(formatFormalReportText(remainingSummary, "work", 2)),
        140
      );
      updates.push("Kernaussagen in Arbeiten notiert");
    }
  }

  const todoCandidates = polishedText
    .split(/[.!?;\n]/)
    .map((line) => line.trim())
    .filter((line) => /(offen|todo|muss noch|bitte|noch zu tun|nachreichen)/i.test(line));
  for (const todoLine of todoCandidates) {
    addTodo(todoLine.replace(/^(todo|offen)[:\s-]*/i, ""));
  }

  syncEntryInputs();
  persist();
  updateStatus("Ungespeichert");
  return {
    summary: updates.length
      ? `Freisprechen verarbeitet: formeller Baustellenbericht-Stil aktiv (${updates.join(", ")}).`
      : "Text gespeichert. Falls etwas fehlt: Stichworte wie 'Mitarbeiter' oder 'Problem' sagen.",
  };
}

function extractCompanyWorkerMentions(text) {
  const likelyDistribution =
    /(firma|fa\.|verteilung|davon|von|bei|mitarbeiter|arbeiter|kollegen|personen|mann|leute|team)/i.test(
      text
    ) ||
    /[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß&.\- ]{1,30}\s+\d{1,3}\s*(?:,|;|\bund\b)/i.test(text);
  if (!likelyDistribution) return [];

  const hits = [];
  function pushHit(companyRaw, countRaw) {
    const company = sanitizeCompanyName(companyRaw);
    const count = Number(countRaw);
    if (company && Number.isFinite(count) && count > 0) {
      hits.push({ company, count });
    }
  }

  const regexA =
    /(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50}?)\s+(\d{1,3})\s*(mitarbeiter|arbeiter|personen|mann|leute)\b/gi;
  const regexB =
    /(\d{1,3})\s*(mitarbeiter|arbeiter|personen|mann|leute)\s*(?:von|bei)\s*(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50})/gi;
  const regexC =
    /(\d{1,3})\s*(?:von|bei)\s*(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50})(?=,|;|\.|\bund\b|$)/gi;
  const regexD =
    /(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50}?)\s*[:\-]\s*(\d{1,3})(?=,|;|\.|\bund\b|$)/gi;
  const regexE =
    /(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50}?)\s*(?:mit|hat|stellt)\s*(\d{1,3})\s*(?:mitarbeiter|arbeiter|personen|mann|leute)?(?=,|;|\.|\bund\b|$)/gi;
  const regexF =
    /(?:firma|fa\.)?\s*([A-Za-z0-9ÄÖÜäöüß&.\- ]{2,50}?)\s+(\d{1,3})(?=,|;|\.|\bund\b|$)/gi;

  let match = regexA.exec(text);
  while (match) {
    pushHit(match[1], match[2]);
    match = regexA.exec(text);
  }

  match = regexB.exec(text);
  while (match) {
    pushHit(match[3], match[1]);
    match = regexB.exec(text);
  }

  match = regexC.exec(text);
  while (match) {
    pushHit(match[2], match[1]);
    match = regexC.exec(text);
  }

  match = regexD.exec(text);
  while (match) {
    pushHit(match[1], match[2]);
    match = regexD.exec(text);
  }

  match = regexE.exec(text);
  while (match) {
    pushHit(match[1], match[2]);
    match = regexE.exec(text);
  }

  match = regexF.exec(text);
  while (match) {
    pushHit(match[1], match[2]);
    match = regexF.exec(text);
  }

  const deduped = new Map();
  for (const hit of hits) {
    const key = hit.company.toLowerCase();
    if (deduped.has(key)) {
      deduped.get(key).count = Math.max(deduped.get(key).count, hit.count);
    } else {
      deduped.set(key, { ...hit });
    }
  }
  return Array.from(deduped.values());
}

function sanitizeCompanyName(value) {
  const stopWords = new Set([
    "heute",
    "waren",
    "sind",
    "ist",
    "mit",
    "und",
    "auf",
    "davon",
    "gesamt",
    "insgesamt",
    "team",
    "mitarbeiter",
    "arbeiter",
    "kollegen",
    "personen",
    "leute",
    "mann",
    "im",
    "in",
    "an",
    "am",
  ]);

  let cleaned = value.replace(/\s+/g, " ").trim();
  cleaned = cleaned
    .replace(/^(?:firma|fa\.|von|bei|davon)\s+/i, "")
    .replace(
      /\s+(?:im|in|an|auf)\s+(?:\d{1,2}\.?\s*(?:og|ug)|eg|kg|wohnung|whg|treppenhaus|bereich|achse|raum|haus|block)\b.*$/i,
      ""
    )
    .replace(/\s+(?:mitarbeiter|arbeiter|personen|mann|leute)$/i, "")
    .replace(/\s+\d{1,3}$/i, "")
    .replace(/[,:;.\-]+$/g, "")
    .trim();

  if (!cleaned) return "";
  if (stopWords.has(cleaned.toLowerCase())) return "";
  if (cleaned.length < 2) return "";
  return cleaned;
}

async function importClipboardImage(event) {
  if (!isBautagebuchVisible() && !isPhotoModuleVisible()) return;
  if (!event.clipboardData?.items?.length) return;
  const imageFiles = [];
  for (const item of event.clipboardData.items) {
    if (item.type.startsWith("image/")) {
      const file = item.getAsFile();
      if (file) imageFiles.push(file);
    }
  }
  if (imageFiles.length) {
    if (isPhotoModuleVisible()) {
      await appendPhotoFiles(imageFiles);
    } else {
      await appendEntryPhotoFiles(imageFiles);
    }
  }
}

async function handlePhotoModuleDrop(event) {
  event.preventDefault();
  const files = Array.from(event.dataTransfer?.files || []);
  await appendPhotoFiles(files);
}

async function handleEntryPhotoDrop(event) {
  event.preventDefault();
  const files = Array.from(event.dataTransfer?.files || []);
  await appendEntryPhotoFiles(files);
}

function bindEvents() {
  if (el.loginBtn) el.loginBtn.addEventListener("click", handleLogin);
  if (el.registerBtn) el.registerBtn.addEventListener("click", handleRegister);
  if (el.logoutBtn) el.logoutBtn.addEventListener("click", handleLogout);
  if (el.openBautagebuchBtn) el.openBautagebuchBtn.addEventListener("click", showBautagebuchView);
  if (el.openPhotoModuleBtn) el.openPhotoModuleBtn.addEventListener("click", showPhotoModuleView);
  if (el.openWorkTimesBtn) el.openWorkTimesBtn.addEventListener("click", showWorkTimesView);
  if (el.backToMenuBtn) el.backToMenuBtn.addEventListener("click", showMenuView);
  if (el.backToMenuFromPhotoBtn) {
    el.backToMenuFromPhotoBtn.addEventListener("click", showMenuView);
  }
  if (el.backToMenuFromTimesBtn) {
    el.backToMenuFromTimesBtn.addEventListener("click", showMenuView);
  }

  if (el.loginUsername) {
    el.loginUsername.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleLogin();
      }
    });
  }
  if (el.loginPassword) {
    el.loginPassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleLogin();
      }
    });
  }
  if (el.registerUsername) {
    el.registerUsername.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleRegister();
      }
    });
  }
  if (el.registerPassword) {
    el.registerPassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleRegister();
      }
    });
  }
  if (el.registerRole) {
    el.registerRole.addEventListener("change", updateRegisterCodeHint);
  }

  el.saveProjectBtn.addEventListener("click", saveProject);
  if (el.cloudWorkspaceKey) {
    el.cloudWorkspaceKey.addEventListener("change", () => {
      el.cloudWorkspaceKey.value = normalizeWorkspaceKey(el.cloudWorkspaceKey.value);
    });
  }
  if (el.cloudConnectBtn) {
    el.cloudConnectBtn.addEventListener("click", async () => {
      await connectCloud(true);
    });
  }
  if (el.cloudLoadBtn) {
    el.cloudLoadBtn.addEventListener("click", async () => {
      await loadCloudState();
    });
  }
  if (el.cloudSyncBtn) {
    el.cloudSyncBtn.addEventListener("click", async () => {
      if (!cloud.connected) {
        const ok = await connectCloud(false);
        if (!ok) return;
      }
      setCloudBusy(true);
      await pushCloudState();
      setCloudBusy(false);
    });
  }
  window.addEventListener("pageshow", () => {
    void syncCloudOnAppWake(true);
  });
  window.addEventListener("online", () => {
    void syncCloudOnAppWake(true);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void syncCloudOnAppWake(false);
    }
  });
  if (el.projectSelect) {
    el.projectSelect.addEventListener("change", () => {
      switchActiveProject(el.projectSelect.value);
    });
  }
  if (el.newProjectBtn) {
    el.newProjectBtn.addEventListener("click", createNewProject);
  }
  [el.projectName, el.siteManager, el.projectNumber].forEach((input) => {
    input.addEventListener("input", updatePrintMeta);
    input.addEventListener("change", updatePrintMeta);
  });
  el.newEntryBtn.addEventListener("click", addEntry);
  el.saveEntryBtn.addEventListener("click", saveEntry);
  el.deleteBtn.addEventListener("click", deleteEntry);
  if (el.overviewMonthFilter) {
    el.overviewMonthFilter.addEventListener("change", () => {
      renderReportOverview();
      setManageReportsStatus("");
    });
  }
  if (el.manageDateDelete) {
    el.manageDateDelete.addEventListener("change", () => {
      setManageReportsStatus("");
    });
  }
  if (el.deleteDateReportsBtn) {
    el.deleteDateReportsBtn.addEventListener("click", deleteReportsByDate);
  }
  if (el.deleteDraftReportsBtn) {
    el.deleteDraftReportsBtn.addEventListener("click", deleteDraftReports);
  }
  el.addTodoBtn.addEventListener("click", () => addTodo());
  if (el.addCompanyWorkerBtn) {
    el.addCompanyWorkerBtn.addEventListener("click", () => addCompanyWorker());
  }
  if (el.companyNameInput) {
    el.companyNameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyCountInput) {
    el.companyCountInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyTradeInput) {
    el.companyTradeInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyContactInput) {
    el.companyContactInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyEmployeeNameInput) {
    el.companyEmployeeNameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyShiftStartInput) {
    el.companyShiftStartInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyShiftEndInput) {
    el.companyShiftEndInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.companyShiftBreakInput) {
    el.companyShiftBreakInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCompanyWorker();
      }
    });
  }
  if (el.addWorkItemBtn) {
    el.addWorkItemBtn.addEventListener("click", () => addLocationWorkItem());
  }
  const workItemInputs = [
    el.workItemLocationInput,
    el.workItemDescriptionInput,
    el.workItemQuantityInput,
  ];
  for (const input of workItemInputs) {
    if (!input) continue;
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addLocationWorkItem();
      }
    });
  }
  el.todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTodo();
    }
  });

  if (el.entryPhotoInput) el.entryPhotoInput.addEventListener("change", handleEntryPhotos);
  if (el.entryCameraInput) el.entryCameraInput.addEventListener("change", handleEntryPhotos);
  if (el.photoInput) el.photoInput.addEventListener("change", handlePhotos);
  if (el.cameraInput) el.cameraInput.addEventListener("change", handlePhotos);
  if (el.addPhotoFolderBtn) {
    el.addPhotoFolderBtn.addEventListener("click", () => addPhotoFolder());
  }
  if (el.photoFolderInput) {
    el.photoFolderInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addPhotoFolder();
      }
    });
  }
  if (el.photoFolderSelect) {
    el.photoFolderSelect.addEventListener("change", () => {
      setActivePhotoFolder(el.photoFolderSelect.value);
    });
  }
  if (el.deletePhotoFolderBtn) {
    el.deletePhotoFolderBtn.addEventListener("click", deleteActivePhotoFolder);
  }
  if (el.exportPhotoFolderPdfBtn) {
    el.exportPhotoFolderPdfBtn.addEventListener("click", exportActivePhotoFolderPdf);
  }
  if (el.addWorkTimeBtn) {
    el.addWorkTimeBtn.addEventListener("click", addWorkTimeEntry);
  }
  if (el.exportWorkTimesPdfBtn) {
    el.exportWorkTimesPdfBtn.addEventListener("click", exportAllWorkTimesPdf);
  }
  if (el.workTimeDate) {
    el.workTimeDate.addEventListener("change", () => {
      renderWorkTimes();
      setWorkTimeStatus("");
    });
  }
  const workTimeEnterInputs = [el.workTimeName, el.workTimeCompany, el.workTimeBreak];
  for (const input of workTimeEnterInputs) {
    if (!input) continue;
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addWorkTimeEntry();
      }
    });
  }
  el.exportBtn.addEventListener("click", exportJson);
  el.printBtn.addEventListener("click", () => {
    pullInputsToActiveEntry();
    updatePrintMeta();
    preparePrintReport();
    window.print();
  });
  if (el.clearSignatureBtn) {
    el.clearSignatureBtn.addEventListener("click", clearSignature);
  }

  document.addEventListener("paste", importClipboardImage);
  if (el.entryPhotoGrid) {
    el.entryPhotoGrid.addEventListener("dragover", (event) => event.preventDefault());
    el.entryPhotoGrid.addEventListener("drop", handleEntryPhotoDrop);
  }
  if (el.photoGrid) {
    el.photoGrid.addEventListener("dragover", (event) => event.preventDefault());
    el.photoGrid.addEventListener("drop", handlePhotoModuleDrop);
  }
  window.addEventListener("beforeprint", () => {
    pullInputsToActiveEntry();
    updatePrintMeta();
    preparePrintReport();
  });
  window.addEventListener("resize", onSignatureCanvasResize);

  if (el.signatureCanvas) {
    const canvas = el.signatureCanvas;
    if (window.PointerEvent) {
      canvas.addEventListener("pointerdown", (event) => {
        if (event.button != null && event.button !== 0) return;
        event.preventDefault();
        signaturePad.pointerId = event.pointerId;
        if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
        startSignatureStroke(event.clientX, event.clientY);
      });

      canvas.addEventListener("pointermove", (event) => {
        if (!signaturePad.drawing) return;
        if (signaturePad.pointerId != null && event.pointerId !== signaturePad.pointerId) return;
        event.preventDefault();
        moveSignatureStroke(event.clientX, event.clientY);
      });

      const endPointer = (event) => {
        if (signaturePad.pointerId != null && event.pointerId !== signaturePad.pointerId) return;
        if (canvas.releasePointerCapture) {
          try {
            canvas.releasePointerCapture(event.pointerId);
          } catch (_) {
            // Ignore when pointer capture is already released.
          }
        }
        signaturePad.pointerId = null;
        endSignatureStroke();
      };

      canvas.addEventListener("pointerup", endPointer);
      canvas.addEventListener("pointercancel", endPointer);
    } else {
      canvas.addEventListener("mousedown", (event) => {
        event.preventDefault();
        startSignatureStroke(event.clientX, event.clientY);
      });
      canvas.addEventListener("mousemove", (event) => {
        if (!signaturePad.drawing) return;
        event.preventDefault();
        moveSignatureStroke(event.clientX, event.clientY);
      });
      window.addEventListener("mouseup", () => {
        endSignatureStroke();
      });

      canvas.addEventListener(
        "touchstart",
        (event) => {
          const touch = event.changedTouches && event.changedTouches[0];
          if (!touch) return;
          event.preventDefault();
          startSignatureStroke(touch.clientX, touch.clientY);
        },
        { passive: false }
      );
      canvas.addEventListener(
        "touchmove",
        (event) => {
          const touch = event.changedTouches && event.changedTouches[0];
          if (!touch) return;
          event.preventDefault();
          moveSignatureStroke(touch.clientX, touch.clientY);
        },
        { passive: false }
      );
      canvas.addEventListener(
        "touchend",
        (event) => {
          event.preventDefault();
          endSignatureStroke();
        },
        { passive: false }
      );
      canvas.addEventListener(
        "touchcancel",
        (event) => {
          event.preventDefault();
          endSignatureStroke();
        },
        { passive: false }
      );
    }
  }

  const entryInputs = [
    el.entryDate,
    el.weather,
    el.workers,
    el.workStartTime,
    el.workEndTime,
    el.workBreakMinutes,
    el.workShiftType,
    el.workLocationDetail,
    el.workDone,
    el.workQuantities,
    el.issues,
    el.nextSteps,
    el.materialDeliveries,
    el.equipmentUsed,
    el.siteVisitors,
    el.privateNotes,
    el.signatureSignerName,
    el.signatureSignerRole,
  ];
  for (const input of entryInputs) {
    if (!input) continue;
    input.addEventListener("input", pullInputsToActiveEntry);
    input.addEventListener("change", pullInputsToActiveEntry);
  }

  if (el.entryDate) {
    el.entryDate.addEventListener("change", () => {
      renderEntries();
      if (el.manageDateDelete) {
        el.manageDateDelete.value = el.entryDate.value || "";
      }
    });
  }

  getAutoResizeTextareas().forEach((textarea) => {
    textarea.addEventListener("input", () => autoResizeTextarea(textarea));
    textarea.addEventListener("change", () => autoResizeTextarea(textarea));
  });
}

function init() {
  loadAuthState();
  loadState();
  loadCloudSyncMeta();
  ensureProjectMediaState();
  const savedCloudConfig = loadCloudConfig();
  applyCloudUiMode(savedCloudConfig);
  applyCloudInputs(savedCloudConfig);
  bindEvents();
  syncProjectInputs();
  renderEntries();
  syncEntryInputs();
  renderPhotoFolders();
  renderPhotos();
  syncWorkTimeInputs();
  renderWorkTimes();
  setCloudBusy(false);
  onSignatureCanvasResize();
  autoResizeAllTextareas();
  void autoConnectCloudIfConfigured();
  showMenuView();
}

init();
